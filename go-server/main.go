package main

import (
	"context"
	"fmt"
	ext_authz "github.com/envoyproxy/go-control-plane/envoy/service/auth/v2"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"os"
	"os/signal"
	"google.golang.org/genproto/googleapis/rpc/status"
	"github.com/gogo/googleapis/google/rpc"
)

type server struct {
	mode string
}

func main() {
	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt)

	go listen(":8081", &server{mode: "GATEWAY"})

	<-c
}

func listen(address string, serverType *server) {
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	ext_authz.RegisterAuthorizationServer(s, serverType)
	reflection.Register(s)
	fmt.Printf("Starting %q reciver on %q\n", serverType.mode, address)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

func (s *server) Check(ctx context.Context, req *ext_authz.CheckRequest) (*ext_authz.CheckResponse, error) {
// fmt.Print(req)
	resp := &ext_authz.CheckResponse{}
	resp = &ext_authz.CheckResponse{
			Status: &status.Status{Code: int32(rpc.OK)},
			HttpResponse: &ext_authz.CheckResponse_OkResponse{
				OkResponse: &ext_authz.OkHttpResponse{

				},
			},
		}
	return resp, nil
}

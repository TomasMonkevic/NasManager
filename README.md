# NasManager

# Starting the backend #

`cd nas-manager`
`sbt docker:publishLocal`
`docker-compose -f docker-compose.yml up -d --build`

# Useful information #

To test gRPC calls use grpcurl. Example:

`grpcurl -proto .\src\main\protobuf\Greeter.proto -plaintext -d '{\"name\": \"World\"}' localhost:6000 greeter.GreeterService/SayHello`


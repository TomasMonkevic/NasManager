# NasManager

# Useful information #

To test gRPC calls use grpcurl. Example:

`grpcurl -proto .\nas-manager\src\main\protobuf\Greeter.proto -plaintext -d '{\"name\": \"World\"}' localhost:6000 greeter.GreeterService/SayHello`


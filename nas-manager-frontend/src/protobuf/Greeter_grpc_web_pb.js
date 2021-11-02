/**
 * @fileoverview gRPC-Web generated client stub for greeter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.greeter = require('./Greeter_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeter.GreeterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeter.GreeterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greeter.HelloRequest,
 *   !proto.greeter.HelloReply>}
 */
const methodDescriptor_GreeterService_SayHello = new grpc.web.MethodDescriptor(
  '/greeter.GreeterService/SayHello',
  grpc.web.MethodType.UNARY,
  proto.greeter.HelloRequest,
  proto.greeter.HelloReply,
  /**
   * @param {!proto.greeter.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeter.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greeter.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greeter.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greeter.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greeter.GreeterServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greeter.GreeterService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayHello,
      callback);
};


/**
 * @param {!proto.greeter.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greeter.HelloReply>}
 *     Promise that resolves to the response
 */
proto.greeter.GreeterServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greeter.GreeterService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greeter.HelloRequest,
 *   !proto.greeter.HelloReply>}
 */
const methodDescriptor_GreeterService_ItKeepsReplying = new grpc.web.MethodDescriptor(
  '/greeter.GreeterService/ItKeepsReplying',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.greeter.HelloRequest,
  proto.greeter.HelloReply,
  /**
   * @param {!proto.greeter.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeter.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greeter.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greeter.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.greeter.GreeterServiceClient.prototype.itKeepsReplying =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greeter.GreeterService/ItKeepsReplying',
      request,
      metadata || {},
      methodDescriptor_GreeterService_ItKeepsReplying);
};


/**
 * @param {!proto.greeter.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greeter.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.greeter.GreeterServicePromiseClient.prototype.itKeepsReplying =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greeter.GreeterService/ItKeepsReplying',
      request,
      metadata || {},
      methodDescriptor_GreeterService_ItKeepsReplying);
};


module.exports = proto.greeter;


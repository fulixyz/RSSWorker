// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/resource/v1/module.proto (package bilibili.app.resource.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum bilibili.app.resource.v1.CompressType
 */
export const CompressType = proto3.makeEnum(
  "bilibili.app.resource.v1.CompressType",
  [
    {no: 0, name: "Unzip"},
    {no: 1, name: "Original"},
  ],
);

/**
 * @generated from enum bilibili.app.resource.v1.EnvType
 */
export const EnvType = proto3.makeEnum(
  "bilibili.app.resource.v1.EnvType",
  [
    {no: 0, name: "Unknown"},
    {no: 1, name: "Release"},
    {no: 2, name: "Test"},
  ],
);

/**
 * @generated from enum bilibili.app.resource.v1.IncrementType
 */
export const IncrementType = proto3.makeEnum(
  "bilibili.app.resource.v1.IncrementType",
  [
    {no: 0, name: "Total"},
    {no: 1, name: "Incremental"},
  ],
);

/**
 * @generated from enum bilibili.app.resource.v1.LevelType
 */
export const LevelType = proto3.makeEnum(
  "bilibili.app.resource.v1.LevelType",
  [
    {no: 0, name: "Undefined"},
    {no: 1, name: "High"},
    {no: 2, name: "Middle"},
    {no: 3, name: "Low"},
  ],
);

/**
 * @generated from message bilibili.app.resource.v1.ListReply
 */
export const ListReply = proto3.makeMessageType(
  "bilibili.app.resource.v1.ListReply",
  () => [
    { no: 1, name: "env", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pools", kind: "message", T: PoolReply, repeated: true },
    { no: 3, name: "list_version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.app.resource.v1.ListReq
 */
export const ListReq = proto3.makeMessageType(
  "bilibili.app.resource.v1.ListReq",
  () => [
    { no: 1, name: "pool_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version_list", kind: "message", T: VersionListReq, repeated: true },
    { no: 4, name: "env", kind: "enum", T: proto3.getEnumType(EnvType) },
    { no: 5, name: "sys_ver", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "scale", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "arch", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "list_version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.app.resource.v1.ModuleReply
 */
export const ModuleReply = proto3.makeMessageType(
  "bilibili.app.resource.v1.ModuleReply",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "md5", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "total_md5", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "increment", kind: "enum", T: proto3.getEnumType(IncrementType) },
    { no: 7, name: "is_wifi", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "level", kind: "enum", T: proto3.getEnumType(LevelType) },
    { no: 9, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "file_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "file_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "compress", kind: "enum", T: proto3.getEnumType(CompressType) },
    { no: 13, name: "publish_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "pool_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "module_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "version_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "file_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 18, name: "zip_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.app.resource.v1.PoolReply
 */
export const PoolReply = proto3.makeMessageType(
  "bilibili.app.resource.v1.PoolReply",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "modules", kind: "message", T: ModuleReply, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.resource.v1.VersionListReq
 */
export const VersionListReq = proto3.makeMessageType(
  "bilibili.app.resource.v1.VersionListReq",
  () => [
    { no: 1, name: "pool_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "versions", kind: "message", T: VersionReq, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.resource.v1.VersionReq
 */
export const VersionReq = proto3.makeMessageType(
  "bilibili.app.resource.v1.VersionReq",
  () => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);


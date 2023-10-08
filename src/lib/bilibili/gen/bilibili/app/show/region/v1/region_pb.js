// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/show/region/v1/region.proto (package bilibili.app.show.region.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message bilibili.app.show.region.v1.RegionConfig
 */
export const RegionConfig = proto3.makeMessageType(
  "bilibili.app.show.region.v1.RegionConfig",
  () => [
    { no: 1, name: "scenes_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scenes_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.show.region.v1.RegionInfo
 */
export const RegionInfo = proto3.makeMessageType(
  "bilibili.app.show.region.v1.RegionInfo",
  () => [
    { no: 1, name: "tid", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "reid", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "logo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "goto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "is_bangumi", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "children", kind: "message", T: RegionInfo, repeated: true },
    { no: 11, name: "config", kind: "message", T: RegionConfig, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.show.region.v1.RegionReply
 */
export const RegionReply = proto3.makeMessageType(
  "bilibili.app.show.region.v1.RegionReply",
  () => [
    { no: 1, name: "regions", kind: "message", T: RegionInfo, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.show.region.v1.RegionReq
 */
export const RegionReq = proto3.makeMessageType(
  "bilibili.app.show.region.v1.RegionReq",
  () => [
    { no: 1, name: "lang", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


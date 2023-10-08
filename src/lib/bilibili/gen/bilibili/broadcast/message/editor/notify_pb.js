// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/broadcast/message/editor/notify.proto (package bilibili.broadcast.message.editor, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message bilibili.broadcast.message.editor.Notify
 */
export const Notify = proto3.makeMessageType(
  "bilibili.broadcast.message.editor.Notify",
  () => [
    { no: 1, name: "msg_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "msg_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "receiver_uid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "receiver_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "story_version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "op_hash", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "op_sender", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "op_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


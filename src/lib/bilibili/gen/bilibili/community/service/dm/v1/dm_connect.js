// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/community/service/dm/v1/dm.proto (package bilibili.community.service.dm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DmExpoReportReq, DmExpoReportRes, DmPlayerConfigReq, DmSegMobileReply, DmSegMobileReq, DmSegOttReply, DmSegOttReq, DmSegSDKReply, DmSegSDKReq, DmViewReply, DmViewReq, Response } from "./dm_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * 弹幕
 *
 * @generated from service bilibili.community.service.dm.v1.DM
 */
export const DM = {
  typeName: "bilibili.community.service.dm.v1.DM",
  methods: {
    /**
     * 获取分段弹幕
     *
     * @generated from rpc bilibili.community.service.dm.v1.DM.DmSegMobile
     */
    dmSegMobile: {
      name: "DmSegMobile",
      I: DmSegMobileReq,
      O: DmSegMobileReply,
      kind: MethodKind.Unary,
    },
    /**
     * 客户端弹幕元数据 字幕、分段、防挡蒙版等
     *
     * @generated from rpc bilibili.community.service.dm.v1.DM.DmView
     */
    dmView: {
      name: "DmView",
      I: DmViewReq,
      O: DmViewReply,
      kind: MethodKind.Unary,
    },
    /**
     * 修改弹幕配置
     *
     * @generated from rpc bilibili.community.service.dm.v1.DM.DmPlayerConfig
     */
    dmPlayerConfig: {
      name: "DmPlayerConfig",
      I: DmPlayerConfigReq,
      O: Response,
      kind: MethodKind.Unary,
    },
    /**
     * ott弹幕列表
     *
     * @generated from rpc bilibili.community.service.dm.v1.DM.DmSegOtt
     */
    dmSegOtt: {
      name: "DmSegOtt",
      I: DmSegOttReq,
      O: DmSegOttReply,
      kind: MethodKind.Unary,
    },
    /**
     * SDK弹幕列表
     *
     * @generated from rpc bilibili.community.service.dm.v1.DM.DmSegSDK
     */
    dmSegSDK: {
      name: "DmSegSDK",
      I: DmSegSDKReq,
      O: DmSegSDKReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.community.service.dm.v1.DM.DmExpoReport
     */
    dmExpoReport: {
      name: "DmExpoReport",
      I: DmExpoReportReq,
      O: DmExpoReportRes,
      kind: MethodKind.Unary,
    },
  }
};


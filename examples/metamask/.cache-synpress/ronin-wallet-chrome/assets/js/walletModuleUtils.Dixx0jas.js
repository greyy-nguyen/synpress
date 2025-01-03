import{L as P,h as D}from"./foregroundCache.BJs-C-d6.js";import{w as u,aE as y,f as F,t as C}from"./moment.D0d7U_v1.js";var l=(e=>(e[e.OkCode=0]="OkCode",e[e.CanceledCode=1]="CanceledCode",e[e.UnknownCode=2]="UnknownCode",e[e.InvalidArgumentCode=3]="InvalidArgumentCode",e[e.DeadlineExceededCode=4]="DeadlineExceededCode",e[e.NotFoundCode=5]="NotFoundCode",e[e.AlreadyExistsCode=6]="AlreadyExistsCode",e[e.PermissionDeniedCode=7]="PermissionDeniedCode",e[e.ResourceExhaustedCode=8]="ResourceExhaustedCode",e[e.FailedPreconditionCode=9]="FailedPreconditionCode",e[e.AbortedCode=10]="AbortedCode",e[e.OutOfRangeCode=11]="OutOfRangeCode",e[e.UnimplementedCode=12]="UnimplementedCode",e[e.InternalCode=13]="InternalCode",e[e.UnavailableCode=14]="UnavailableCode",e[e.DataLossCode=15]="DataLossCode",e[e.UnauthenticatedCode=16]="UnauthenticatedCode",e[e.MPCInitializeProtocolFailedCode=20]="MPCInitializeProtocolFailedCode",e[e.MPCHandshakeProtocolFailedCode=21]="MPCHandshakeProtocolFailedCode",e[e.MPCBadSignatureCode=22]="MPCBadSignatureCode",e[e.MPCSignatureVerifyFailedCode=23]="MPCSignatureVerifyFailedCode",e[e.MPCServerStoreKeyFailedCode=24]="MPCServerStoreKeyFailedCode",e[e.MPCBadResultCode=25]="MPCBadResultCode",e[e.MPCSendTxRequestFailedCode=26]="MPCSendTxRequestFailedCode",e[e.MPCBadKeyCode=27]="MPCBadKeyCode",e[e.MPCSignMessageFailedCode=28]="MPCSignMessageFailedCode",e[e.MPCSendTxFailedCode=29]="MPCSendTxFailedCode",e[e.DialSocketFailedCode=100]="DialSocketFailedCode",e[e.WriteDataFailedCode=101]="WriteDataFailedCode",e[e.ReadDataFailedCode=102]="ReadDataFailedCode",e[e.BadRPCDataCode=103]="BadRPCDataCode",e[e.BadSignMessageDataCode=104]="BadSignMessageDataCode",e[e.BadTxDataCode=105]="BadTxDataCode",e[e.InitHTTPFailedCode=106]="InitHTTPFailedCode",e[e.DoHTTPFailedCode=107]="DoHTTPFailedCode",e[e.BadHTTPDataCode=108]="BadHTTPDataCode",e[e.DialRPCNodeFailedCode=109]="DialRPCNodeFailedCode",e[e.DailyNativeTokenTransferredReachLimitCode=1e3]="DailyNativeTokenTransferredReachLimitCode",e))(l||{});const h=async e=>{var i,d,n,s;P.info("Get key for: ",e);const a=u.getWalletById(e);if(P.info("Get key info",(i=a==null?void 0:a.getState())==null?void 0:i.walletId,(d=a==null?void 0:a.getState())==null?void 0:d.type,(s=(n=a==null?void 0:a.getState())==null?void 0:n.accounts)==null?void 0:s.length),!(!a||a.getState().type!==D.SEED_PHRASE))return await a.getSeed()},o=async e=>{const a=await u.getAccountByAddress(e);return a?a.privateKey??"":""},R=async e=>{const a=u.getWalletById(e);return a?a.getState().masterPassword??"":""},x=async e=>{var a,i,d,n,s,g;try{if(!e||typeof e!="object")return;if([(d=(i=(a=e.error)==null?void 0:a.data)==null?void 0:i.cause)==null?void 0:d.message,e.message].includes("Account not found for this address")){await u.lock(!0);return}const t=y.getError(((s=(n=e.error)==null?void 0:n.data)==null?void 0:s.cause)||e);if(((t==null?void 0:t.code)===l.DialSocketFailedCode||(t==null?void 0:t.code)===l.DoHTTPFailedCode)&&((g=t==null?void 0:t.errorMessage)!=null&&g.includes("401"))){await F.setSessionExpired(!0),await C.setShownExpiredSession(!1);return}if((t==null?void 0:t.code)===l.UnauthenticatedCode&&(t==null?void 0:t.name)==="Unauthenticated"){await F.setSessionExpired(!0),await C.setShownExpiredSession(!1);return}}catch(S){P.error("[handleRpcError] err: ",S)}};export{o as a,R as b,h as g,x as h};
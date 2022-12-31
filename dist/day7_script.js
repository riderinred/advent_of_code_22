"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// END TYPES
const commands = [
    "$ cd /",
    "$ ls",
    "dir dcvzbqf",
    "23804 gsdpmrq.bsz",
    "24936 nfngbl.mcn",
    "178747 plw.frm",
    "dir qdtw",
    "dir qmfvph",
    "$ cd dcvzbqf",
    "$ ls",
    "dir gfvl",
    "$ cd gfvl",
    "$ ls",
    "104564 dnbmm.bgc",
    "$ cd ..",
    "$ cd ..",
    "$ cd qdtw",
    "$ ls",
    "dir fsj",
    "dir jwfbvmds",
    "216592 pcg.wnr",
    "dir pwnhpm",
    "dir qbrpq",
    "dir wdc",
    "dir wpw",
    "dir zbfgmw",
    "$ cd fsj",
    "$ ls",
    "118575 ltbr.mdf",
    "$ cd ..",
    "$ cd jwfbvmds",
    "$ ls",
    "dir bbvg",
    "dir bds",
    "dir clvljpb",
    "44460 gwbbbgj.hbs",
    "dir hzqlb",
    "dir jpvnzhf",
    "61025 trdm.qps",
    "$ cd bbvg",
    "$ ls",
    "219031 zbzgvsb",
    "94339 zhfmsb.lvv",
    "$ cd ..",
    "$ cd bds",
    "$ ls",
    "133483 hzqlb",
    "$ cd ..",
    "$ cd clvljpb",
    "$ ls",
    "103511 bmm.dwc",
    "121211 clvljpb.fzn",
    "158145 dnbmm.fmm",
    "74998 pcg.wnr",
    "dir psvtz",
    "$ cd psvtz",
    "$ ls",
    "dir gdj",
    "167697 pcgjgc.wgl",
    "2613 qchfgv",
    "91712 qsdzj.jng",
    "$ cd gdj",
    "$ ls",
    "133897 qchfgv",
    "dir vmcshh",
    "93805 zgmvb.jfg",
    "$ cd vmcshh",
    "$ ls",
    "200517 zgwwvb.pcs",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "dir dnbmm",
    "$ cd dnbmm",
    "$ ls",
    "223576 msrbz.wjs",
    "$ cd ..",
    "$ cd ..",
    "$ cd jpvnzhf",
    "$ ls",
    "20581 nfngbl.mcn",
    "$ cd ..",
    "$ cd ..",
    "$ cd pwnhpm",
    "$ ls",
    "dir clvljpb",
    "33727 hzqlb.zpp",
    "39037 lfjjf.pjt",
    "163662 mbwfhq.cjj",
    "236292 nfngbl.mcn",
    "189576 zvbgnbvf",
    "$ cd clvljpb",
    "$ ls",
    "dir clvljpb",
    "212906 clvljpb.pls",
    "214564 dnm",
    "dir fvgbsft",
    "230034 hzqlb.jvz",
    "48101 plw.frm",
    "237902 qchfgv",
    "$ cd clvljpb",
    "$ ls",
    "dir hzqlb",
    "dir zhq",
    "$ cd hzqlb",
    "$ ls",
    "189238 cvgp",
    "dir gjg",
    "$ cd gjg",
    "$ ls",
    "167082 ttltfz.bvz",
    "$ cd ..",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "203202 nfngbl.mcn",
    "212148 qhnnr.dhs",
    "$ cd ..",
    "$ cd ..",
    "$ cd fvgbsft",
    "$ ls",
    "dir fzhwsjf",
    "18477 nps",
    "dir vlplrn",
    "dir vnbg",
    "dir vpc",
    "$ cd fzhwsjf",
    "$ ls",
    "91220 clvljpb.png",
    "235721 pcg.wnr",
    "61559 qchfgv",
    "70762 vpr.nlc",
    "$ cd ..",
    "$ cd vlplrn",
    "$ ls",
    "260247 qrtnfmln.tpv",
    "$ cd ..",
    "$ cd vnbg",
    "$ ls",
    "43069 ttltfz.mzr",
    "dir wfb",
    "58219 zgwwvb.pcs",
    "272132 zhq.mrw",
    "$ cd wfb",
    "$ ls",
    "107068 clvljpb.mtp",
    "$ cd ..",
    "$ cd ..",
    "$ cd vpc",
    "$ ls",
    "185602 dnbmm.hfm",
    "100399 hzqlb.vtn",
    "259486 pcg.wnr",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd qbrpq",
    "$ ls",
    "138169 cntvzqfm.hgp",
    "216598 dnbmm.lhs",
    "116696 nfngbl.mcn",
    "35315 phf.rvn",
    "$ cd ..",
    "$ cd wdc",
    "$ ls",
    "270492 ghdzdq.ghg",
    "137119 lnt.nsd",
    "$ cd ..",
    "$ cd wpw",
    "$ ls",
    "dir dnbmm",
    "156266 jgfv.cpp",
    "156947 lvlqcrrs.djl",
    "dir lvznwbpg",
    "12199 nfngbl.mcn",
    "54105 nlsp",
    "86737 zhq.wmz",
    "$ cd dnbmm",
    "$ ls",
    "138125 lth.hcq",
    "80844 nhh.gzc",
    "149596 ttltfz.ntn",
    "$ cd ..",
    "$ cd lvznwbpg",
    "$ ls",
    "99156 ldtst.dcr",
    "217350 pcg.wnr",
    "247238 plw.frm",
    "dir qbqpsccr",
    "dir wnms",
    "dir zhq",
    "165426 zmhnzdmb.jnc",
    "$ cd qbqpsccr",
    "$ ls",
    "272199 pcg.wnr",
    "219600 wpjqjm.qwr",
    "257473 zhq.zmq",
    "$ cd ..",
    "$ cd wnms",
    "$ ls",
    "dir ttltfz",
    "$ cd ttltfz",
    "$ ls",
    "dir btm",
    "$ cd btm",
    "$ ls",
    "dir hzqlb",
    "$ cd hzqlb",
    "$ ls",
    "dir ttltfz",
    "$ cd ttltfz",
    "$ ls",
    "204980 hzqlb.hhm",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "154868 srdfz",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd zbfgmw",
    "$ ls",
    "dir fcjwpgz",
    "dir ttltfz",
    "dir zhq",
    "$ cd fcjwpgz",
    "$ ls",
    "dir jltvg",
    "9958 qchfgv",
    "dir wwqrb",
    "$ cd jltvg",
    "$ ls",
    "6370 bssvrjdq.mnr",
    "$ cd ..",
    "$ cd wwqrb",
    "$ ls",
    "157805 npdl",
    "237057 qchfgv",
    "dir twrp",
    "259572 vptsgw",
    "176388 zgwwvb.pcs",
    "91956 zhq",
    "$ cd twrp",
    "$ ls",
    "dir sfvntjwf",
    "$ cd sfvntjwf",
    "$ ls",
    "68331 hdwfg.jrl",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ttltfz",
    "$ ls",
    "41183 plw.frm",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "32950 dmzbmrdr.gtq",
    "dir zhq",
    "$ cd zhq",
    "$ ls",
    "195502 dmgmwbf",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd qmfvph",
    "$ ls",
    "dir cwfh",
    "dir dnbmm",
    "dir mmmdpth",
    "4841 pcg.wnr",
    "dir prnpbn",
    "111478 sgmg.hbs",
    "dir ttltfz",
    "178296 ttltfz.mjc",
    "dir zcvfqn",
    "dir zhq",
    "32446 zhq.pjm",
    "dir zpb",
    "$ cd cwfh",
    "$ ls",
    "dir dswtm",
    "dir mwzjf",
    "$ cd dswtm",
    "$ ls",
    "70390 fmq.mrp",
    "108185 qjlfnlp",
    "189923 zhq.njc",
    "$ cd ..",
    "$ cd mwzjf",
    "$ ls",
    "122536 glmpd.mdl",
    "108226 nfngbl.mcn",
    "dir qbvffr",
    "33192 ttltfz",
    "195824 zgwwvb.pcs",
    "$ cd qbvffr",
    "$ ls",
    "147595 pcg.wnr",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd dnbmm",
    "$ ls",
    "dir cbdl",
    "dir fhqjzf",
    "56752 gsgrnf.mlt",
    "dir ndp",
    "67967 nfngbl.mcn",
    "dir swgwdv",
    "$ cd cbdl",
    "$ ls",
    "263964 dnrbtr.lbh",
    "66120 qchfgv",
    "dir qwvd",
    "$ cd qwvd",
    "$ ls",
    "dir dnbmm",
    "143315 mhlswpcd.lpt",
    "199969 ncdrrp.ljf",
    "$ cd dnbmm",
    "$ ls",
    "122474 pcg.wnr",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd fhqjzf",
    "$ ls",
    "dir fnnbrlc",
    "dir hzqlb",
    "254128 pcg.wnr",
    "168008 plw.frm",
    "dir vwgvd",
    "dir zhq",
    "$ cd fnnbrlc",
    "$ ls",
    "156413 dnbmm.ngb",
    "30790 zbfnjnnz.csg",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "267451 cgzrdpr",
    "77460 nfngbl.mcn",
    "205978 plw.frm",
    "66224 sjw.ctb",
    "212873 zgwwvb.pcs",
    "$ cd ..",
    "$ cd vwgvd",
    "$ ls",
    "161177 phdbz.tmc",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "dir hchlgv",
    "218946 rfngrlz.zzr",
    "dir zhq",
    "$ cd hchlgv",
    "$ ls",
    "dir dnbmm",
    "270943 hcpnwbd",
    "dir hzqlb",
    "13433 wdljw.cgn",
    "$ cd dnbmm",
    "$ ls",
    "150415 pcg.wnr",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "44475 qcvwtfg.wrl",
    "$ cd ..",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "155076 ggndpjzp.rpz",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ndp",
    "$ ls",
    "112146 nfw.htp",
    "207815 vqwtw.qff",
    "$ cd ..",
    "$ cd swgwdv",
    "$ ls",
    "dir dmqn",
    "dir fzgdjp",
    "205897 hzqlb.vtm",
    "226944 nfngbl.mcn",
    "259443 nrfpz.vmn",
    "136591 zgwwvb.pcs",
    "$ cd dmqn",
    "$ ls",
    "258693 gdplrzt.wzf",
    "141489 hzqlb",
    "225488 pghz.brw",
    "$ cd ..",
    "$ cd fzgdjp",
    "$ ls",
    "206026 msthjppp",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd mmmdpth",
    "$ ls",
    "dir clvljpb",
    "dir hzqlb",
    "263747 pcg.wnr",
    "$ cd clvljpb",
    "$ ls",
    "168342 qhgndmj",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "dir lqvgqhw",
    "$ cd lqvgqhw",
    "$ ls",
    "218324 swnjhbj.cqt",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd prnpbn",
    "$ ls",
    "dir dndnhn",
    "176959 gzhtvt",
    "85765 hzqlb.clg",
    "120691 nfngbl.mcn",
    "245942 qchfgv",
    "43951 zgwwvb.pcs",
    "$ cd dndnhn",
    "$ ls",
    "235760 dhvvnqpt",
    "dir hvg",
    "dir jqvmzg",
    "dir mhz",
    "$ cd hvg",
    "$ ls",
    "167698 zqbj",
    "$ cd ..",
    "$ cd jqvmzg",
    "$ ls",
    "218904 wppv.mqz",
    "dir zlp",
    "$ cd zlp",
    "$ ls",
    "8030 wvj.gld",
    "$ cd ..",
    "$ cd ..",
    "$ cd mhz",
    "$ ls",
    "37541 tdfvwqlj",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ttltfz",
    "$ ls",
    "dir dnbmm",
    "dir ttltfz",
    "dir wbvcf",
    "dir wsqvpp",
    "148645 zgwwvb.pcs",
    "$ cd dnbmm",
    "$ ls",
    "116852 mjzgll.bcp",
    "$ cd ..",
    "$ cd ttltfz",
    "$ ls",
    "dir hzqlb",
    "dir msczpj",
    "dir mvbhn",
    "38087 nfngbl.mcn",
    "dir ttjbnj",
    "dir ttltfz",
    "dir vjj",
    "dir zhq",
    "dir zqgcbnrt",
    "$ cd hzqlb",
    "$ ls",
    "dir jshj",
    "dir jtjv",
    "dir mgfwthq",
    "dir zhq",
    "$ cd jshj",
    "$ ls",
    "235605 cldpdjp.cbc",
    "dir clvljpb",
    "dir dzcnm",
    "dir hmvw",
    "dir hzqlb",
    "dir ltpqhg",
    "12951 qchfgv",
    "dir wzvjft",
    "$ cd clvljpb",
    "$ ls",
    "65802 lnpjlj",
    "25402 qrtrvmwl.fms",
    "$ cd ..",
    "$ cd dzcnm",
    "$ ls",
    "dir cpnwcv",
    "dir hzqlb",
    "dir mjclcntf",
    "dir qnljb",
    "237105 rlpvq.fbf",
    "dir zhq",
    "$ cd cpnwcv",
    "$ ls",
    "27600 qbgclqc.tdd",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "168016 zhq",
    "$ cd ..",
    "$ cd mjclcntf",
    "$ ls",
    "dir clvljpb",
    "dir qpjtr",
    "43145 zgwwvb.pcs",
    "$ cd clvljpb",
    "$ ls",
    "15025 plw.frm",
    "$ cd ..",
    "$ cd qpjtr",
    "$ ls",
    "54909 zhq",
    "$ cd ..",
    "$ cd ..",
    "$ cd qnljb",
    "$ ls",
    "49366 clvljpb.vtg",
    "52193 fnd.tfr",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "105765 dfnqhggg.cfj",
    "dir hfzgs",
    "135556 spff",
    "129957 vzgjrc.cbs",
    "$ cd hfzgs",
    "$ ls",
    "52456 ttltfz.fdq",
    "31345 wcmf.hsd",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd hmvw",
    "$ ls",
    "77175 flhlwq.rqc",
    "dir gmvqz",
    "252279 gnmvm",
    "dir lmbqfhb",
    "$ cd gmvqz",
    "$ ls",
    "129431 dnbmm.lwl",
    "$ cd ..",
    "$ cd lmbqfhb",
    "$ ls",
    "dir wjql",
    "$ cd wjql",
    "$ ls",
    "48687 cgtbqqq.zzs",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "105333 mqsgqph",
    "dir zhq",
    "$ cd zhq",
    "$ ls",
    "116802 hbtlhjn.dvs",
    "8842 pcg.wnr",
    "211096 plw.frm",
    "$ cd ..",
    "$ cd ..",
    "$ cd ltpqhg",
    "$ ls",
    "245821 hchndjgj.vht",
    "229181 rcfmhrqm.ftc",
    "214977 vgdsjg.jpd",
    "124547 zgwwvb.pcs",
    "$ cd ..",
    "$ cd wzvjft",
    "$ ls",
    "dir fdntdf",
    "174465 pcg.wnr",
    "80888 qchfgv",
    "82987 rqbzbrlv",
    "$ cd fdntdf",
    "$ ls",
    "79808 cmlt.cvd",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd jtjv",
    "$ ls",
    "262350 zww.fbl",
    "$ cd ..",
    "$ cd mgfwthq",
    "$ ls",
    "32365 gjq.rpz",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "dir clvljpb",
    "dir dfdbzzz",
    "dir lqhfbp",
    "152633 nfngbl.mcn",
    "$ cd clvljpb",
    "$ ls",
    "72966 scs",
    "$ cd ..",
    "$ cd dfdbzzz",
    "$ ls",
    "206453 cgrdn.dcw",
    "$ cd ..",
    "$ cd lqhfbp",
    "$ ls",
    "141515 nlvswpcm.fvm",
    "68018 zgwwvb.pcs",
    "215903 zlmdlbdp",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd msczpj",
    "$ ls",
    "dir clvljpb",
    "dir smhsm",
    "dir zhq",
    "$ cd clvljpb",
    "$ ls",
    "148686 fmd",
    "244875 mhnlcz",
    "271194 qchfgv",
    "$ cd ..",
    "$ cd smhsm",
    "$ ls",
    "219572 ptzhr",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "46118 qzmbgv.npf",
    "$ cd ..",
    "$ cd ..",
    "$ cd mvbhn",
    "$ ls",
    "dir dnbmm",
    "17522 dnbmm.hqp",
    "dir hws",
    "dir hwtsjfbb",
    "dir hzqlb",
    "dir mghrhcsj",
    "dir mprvjd",
    "180207 qchfgv",
    "dir qzrshw",
    "130436 rdgndm.clf",
    "128601 tbdz.bgs",
    "dir vpp",
    "$ cd dnbmm",
    "$ ls",
    "dir jqv",
    "dir lcclc",
    "25762 rfwdnjzz.stw",
    "172833 rpf.vqn",
    "18217 zgwwvb.pcs",
    "$ cd jqv",
    "$ ls",
    "dir cpbr",
    "$ cd cpbr",
    "$ ls",
    "59543 mclpq.bpr",
    "$ cd ..",
    "$ cd ..",
    "$ cd lcclc",
    "$ ls",
    "139444 jpwdgvb.wgz",
    "$ cd ..",
    "$ cd ..",
    "$ cd hws",
    "$ ls",
    "42332 clvljpb",
    "240502 clvljpb.bbn",
    "dir jdz",
    "37624 pcg.wnr",
    "dir pjd",
    "169282 plw.frm",
    "100105 tmpll.gwm",
    "$ cd jdz",
    "$ ls",
    "dir dnbmm",
    "$ cd dnbmm",
    "$ ls",
    "191941 cvhvq.rzr",
    "$ cd ..",
    "$ cd ..",
    "$ cd pjd",
    "$ ls",
    "dir bnwjc",
    "dir pgvzhl",
    "33261 rvpw.jlj",
    "dir zhq",
    "$ cd bnwjc",
    "$ ls",
    "159772 lqcbv.mvh",
    "$ cd ..",
    "$ cd pgvzhl",
    "$ ls",
    "159506 nfngbl.mcn",
    "114670 qchfgv",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "162563 mtcd",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd hwtsjfbb",
    "$ ls",
    "dir clvljpb",
    "dir fqclffr",
    "dir hzqlb",
    "243079 rqbh.ltt",
    "dir wtz",
    "$ cd clvljpb",
    "$ ls",
    "42146 bbb",
    "$ cd ..",
    "$ cd fqclffr",
    "$ ls",
    "160031 zgwwvb.pcs",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "70936 pcg.wnr",
    "230600 pfnfjqc.bsp",
    "154358 plw.frm",
    "106007 qtztf",
    "$ cd ..",
    "$ cd wtz",
    "$ ls",
    "265666 nfngbl.mcn",
    "dir wjsrb",
    "dir zhh",
    "$ cd wjsrb",
    "$ ls",
    "76239 wqzg",
    "$ cd ..",
    "$ cd zhh",
    "$ ls",
    "11571 wptzslq.gwr",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "199430 gwgrtw.dzv",
    "$ cd ..",
    "$ cd mghrhcsj",
    "$ ls",
    "49307 bvtmfj.dbh",
    "$ cd ..",
    "$ cd mprvjd",
    "$ ls",
    "dir zhq",
    "$ cd zhq",
    "$ ls",
    "225705 nfngbl.mcn",
    "204180 pcg.wnr",
    "$ cd ..",
    "$ cd ..",
    "$ cd qzrshw",
    "$ ls",
    "dir ddgs",
    "dir hzqlb",
    "dir lmtfhtd",
    "157122 qchfgv",
    "dir sjq",
    "dir tdjh",
    "$ cd ddgs",
    "$ ls",
    "174192 dvb",
    "100076 rgdbsfbm.wrd",
    "18400 zgwwvb.pcs",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "165950 plw.frm",
    "$ cd ..",
    "$ cd lmtfhtd",
    "$ ls",
    "dir clvljpb",
    "137957 dnbmm.vjs",
    "159982 lgll.lnp",
    "25796 plw.frm",
    "201565 znj.ljv",
    "$ cd clvljpb",
    "$ ls",
    "248187 fdvbtnvh.gsc",
    "$ cd ..",
    "$ cd ..",
    "$ cd sjq",
    "$ ls",
    "dir dnbmm",
    "167394 dzmj",
    "143508 plw.frm",
    "dir sllcrmp",
    "dir ttltfz",
    "140530 vdsvw.jhv",
    "$ cd dnbmm",
    "$ ls",
    "224433 qchfgv",
    "$ cd ..",
    "$ cd sllcrmp",
    "$ ls",
    "47580 hfvh.ncs",
    "dir hgtm",
    "237683 nzjzd.zcw",
    "$ cd hgtm",
    "$ ls",
    "194211 nsddmsvq",
    "8615 zgwwvb.pcs",
    "$ cd ..",
    "$ cd ..",
    "$ cd ttltfz",
    "$ ls",
    "249866 gbqptvn.pvm",
    "205314 jjb.qbl",
    "$ cd ..",
    "$ cd ..",
    "$ cd tdjh",
    "$ ls",
    "266400 clvljpb.tmv",
    "130599 qdnmmh.trp",
    "$ cd ..",
    "$ cd ..",
    "$ cd vpp",
    "$ ls",
    "214035 nfngbl.mcn",
    "$ cd ..",
    "$ cd ..",
    "$ cd ttjbnj",
    "$ ls",
    "dir crlhpd",
    "47864 dnbmm",
    "dir ttltfz",
    "$ cd crlhpd",
    "$ ls",
    "dir vmgdpf",
    "$ cd vmgdpf",
    "$ ls",
    "169762 plw.frm",
    "$ cd ..",
    "$ cd ..",
    "$ cd ttltfz",
    "$ ls",
    "dir gdf",
    "dir hdh",
    "dir jbfwr",
    "$ cd gdf",
    "$ ls",
    "68861 plw.frm",
    "$ cd ..",
    "$ cd hdh",
    "$ ls",
    "166403 dnbmm",
    "$ cd ..",
    "$ cd jbfwr",
    "$ ls",
    "100770 pcg.wnr",
    "178623 wnswp",
    "41069 zmrrmdv.bzr",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd ttltfz",
    "$ ls",
    "234321 dnbmm",
    "131214 dtpprnwf.hfr",
    "$ cd ..",
    "$ cd vjj",
    "$ ls",
    "112879 pgzrb",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "147979 clvljpb",
    "dir dvm",
    "136916 pcg.wnr",
    "205323 rwnrfrph",
    "$ cd dvm",
    "$ ls",
    "dir cpsqlvbl",
    "dir ffw",
    "dir hzqlb",
    "95516 pcg.wnr",
    "60101 tcswqq.zjf",
    "$ cd cpsqlvbl",
    "$ ls",
    "dir hzqlb",
    "$ cd hzqlb",
    "$ ls",
    "169253 nscj",
    "$ cd ..",
    "$ cd ..",
    "$ cd ffw",
    "$ ls",
    "161525 bpg.rsw",
    "50629 dnbmm.qff",
    "126458 pcg.wnr",
    "18268 trvcmp",
    "dir vwnlb",
    "171750 zgwwvb.pcs",
    "dir zhq",
    "$ cd vwnlb",
    "$ ls",
    "218994 ccjz.qrm",
    "268399 srwv",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "150894 ztcw.dlc",
    "$ cd ..",
    "$ cd ..",
    "$ cd hzqlb",
    "$ ls",
    "45224 fnb.vgg",
    "53728 nfngbl.mcn",
    "230460 zhq.bsw",
    "$ cd ..",
    "$ cd ..",
    "$ cd ..",
    "$ cd zqgcbnrt",
    "$ ls",
    "91447 bdjbn",
    "$ cd ..",
    "$ cd ..",
    "$ cd wbvcf",
    "$ ls",
    "dir dzh",
    "$ cd dzh",
    "$ ls",
    "250311 qrvn.bft",
    "$ cd ..",
    "$ cd ..",
    "$ cd wsqvpp",
    "$ ls",
    "96530 jwhtlzcm.gmq",
    "$ cd ..",
    "$ cd ..",
    "$ cd zcvfqn",
    "$ ls",
    "264037 hzqlb.jfp",
    "dir nlnl",
    "96691 qchfgv",
    "126674 zhq.ndc",
    "$ cd nlnl",
    "$ ls",
    "248407 nfngbl.mcn",
    "188078 pzwmrfht.dfs",
    "268160 qchfgv",
    "$ cd ..",
    "$ cd ..",
    "$ cd zhq",
    "$ ls",
    "91941 bgc.grv",
    "$ cd ..",
    "$ cd zpb",
    "$ ls",
    "dir dnbmm",
    "dir fsw",
    "$ cd dnbmm",
    "$ ls",
    "260358 lcpg",
    "dir lfm",
    "$ cd lfm",
    "$ ls",
    "227028 qchfgv",
    "$ cd ..",
    "$ cd ..",
    "$ cd fsw",
    "$ ls",
    "dir fffpsrvp",
    "153630 pcg.wnr",
    "dir qtwvgmtl",
    "2971 qzl.pcn",
    "17259 zrpl.hcc",
    "$ cd fffpsrvp",
    "$ ls",
    "dir gflwnfc",
    "176446 lwz.pgq",
    "$ cd gflwnfc",
    "$ ls",
    "132820 cjznqwf.hhq",
    "224464 nfngbl.mcn",
    "104803 qchfgv",
    "$ cd ..",
    "$ cd ..",
    "$ cd qtwvgmtl",
    "$ ls",
    "dir rcssfd",
    "$ cd rcssfd",
    "$ ls",
    "56266 htr.chf",
    "128262 qcfsth.mlt",
    "120527 sqrb",
];
// BEGIN GLOBALS
const input = fs.readFileSync("../inputs/day7.txt", "utf-8");
const testInput = fs.readFileSync("../inputs/day7_test.txt", "utf-8");
const myTestInput = fs.readFileSync("../inputs/day7_myTest.txt", "utf-8");
let fileStructure;
let directoriesWithSizes;
// END GLOBALS
function setupFileStructure() {
    const inputPerLine = input.split("\r\n");
    fileStructure = parseLinesToFileStructure(inputPerLine);
}
function solvePartOne() {
    directoriesWithSizes = getSize_allDirectories(fileStructure, true);
    let size_dirs_small = 0, count_dirs_small = 0;
    for (let i = 0; i < directoriesWithSizes.length; i++) {
        if (directoriesWithSizes[i].dirSize <= 100000) {
            size_dirs_small += directoriesWithSizes[i].dirSize;
            count_dirs_small++;
        }
    }
    console.log(`There are ${count_dirs_small} small dirs with a total size of ${size_dirs_small}`);
}
function solvePartTwo() {
    // calc needed space for total free of 30000000
    const totalSpace = 70000000;
    const freeSpace = totalSpace - directoriesWithSizes[0].dirSize;
    const minSpaceToDelete = 30000000 - freeSpace;
    let directoriesForPossibleDeletion = new Map();
    for (let i = 0; i < directoriesWithSizes.length; i++) {
        let curr_dir = directoriesWithSizes[i];
        if (curr_dir.dirSize >= minSpaceToDelete) {
            directoriesForPossibleDeletion.set(curr_dir.dirName, curr_dir.dirSize);
        }
    }
    const minDirSize = Math.min(...directoriesForPossibleDeletion.values());
    let directoriesForDeletion = [];
    directoriesForPossibleDeletion.forEach((value, key) => {
        if (value === minDirSize)
            directoriesForDeletion.push(key);
    });
    for (let index in directoriesForDeletion) {
        console.log(`Possible directory for deletion ${index} is ${directoriesForDeletion[index]} with size ${minDirSize}`);
    }
}
function parseLinesToFileStructure(inputPerLine) {
    let fileStructure = {};
    let output_buffer = [];
    let entryCount_IOstructure = 0;
    let curr_line_num = 0;
    let nextOutputInfo = {
        writeOnNextCmd: false,
        targetDirectory: "",
        targetDirectory_stages: []
    };
    for (let i = 0; i < inputPerLine.length; i++) {
        const curr_line = inputPerLine[i];
        curr_line_num = i;
        let lineIsCmd;
        curr_line[0] === "$" ? lineIsCmd = true : lineIsCmd = false;
        if (lineIsCmd) {
            if (output_buffer.length > 0 && nextOutputInfo.writeOnNextCmd) {
                addBufferToStructure(output_buffer);
                output_buffer = [];
            }
            if (!checkStructureHasDir(nextOutputInfo.targetDirectory))
                addEmptyDirToStructure(nextOutputInfo.targetDirectory);
            const cmd = parseCmd(curr_line);
            switch (cmd.keyword) {
                case "cd":
                    //nextOutputInfo.directory = curr_line.slice(5);
                    if (cmd.params.includes("..")) {
                        nextOutputInfo.targetDirectory = moveUpDirectory(nextOutputInfo.targetDirectory, true);
                    }
                    else {
                        nextOutputInfo.targetDirectory = moveToDirectory(nextOutputInfo.targetDirectory, cmd.params[0], true);
                    }
                    break;
                case "ls":
                    nextOutputInfo.writeOnNextCmd = true;
                    break;
                default:
                    throw new RangeError(`cmd.keyword is not valid: ${cmd.keyword}`);
            }
        }
        else if (!lineIsCmd) {
            output_buffer.push(curr_line);
        }
        else {
            throw new RangeError("limeIsCmd not boolean");
        }
    }
    // handle last output at end of file
    addBufferToStructure(output_buffer);
    return fileStructure;
    // local functions
    // directory navigation
    function moveToDirectory(curr_dir, dest, verbose) {
        if (dest === "." || dest === "..")
            throw new RangeError("invalid value for dest:  '.' || '..'");
        nextOutputInfo.targetDirectory_stages.push(dest);
        let out;
        if (curr_dir === "/" && dest !== "/") {
            out = curr_dir + dest;
        }
        else if (dest === "/") {
            out = "/";
        }
        else {
            out = curr_dir + "/" + dest;
        }
        if (verbose)
            console.log(`Moving down from ${curr_dir} to ${out} for line ${curr_line_num} at entry ${Object.entries(fileStructure).length}`);
        return out;
    }
    function moveUpDirectory(curr_dir, verbose) {
        if (nextOutputInfo.targetDirectory_stages.length === 0) {
            console.error(nextOutputInfo);
            throw new RangeError("nextOutputInfo.targetDirectory_stages is 0!");
        }
        nextOutputInfo.targetDirectory_stages.pop();
        let all_dirs = curr_dir.split("/");
        let out = "/";
        for (let i = 0; i < all_dirs.length - 1; i++) {
            if (out.slice(-1) !== "/")
                out = out.concat("/");
            out = out.concat(all_dirs[i]);
        }
        let outExists = checkStructureHasDir(out);
        if (!outExists)
            throw new Error(`${out} does not exist!`);
        if (verbose)
            console.log(`Moving up from ${curr_dir} to ${out} for line ${curr_line_num} at entry ${Object.entries(fileStructure).length}`);
        return out;
    }
    function addBufferToStructure(output_buffer) {
        let filesArray = [];
        let subdirArray = [];
        deconstructBuffer(output_buffer);
        if (!checkStructureHasDir(nextOutputInfo.targetDirectory)) {
            addFilledDirToStructure(nextOutputInfo.targetDirectory, filesArray, subdirArray);
        }
        else {
            // nextOutputInfo.foundDirectoryIndex set by checkStructureHasDir()
            if (filesArray.length > 0)
                fileStructure[nextOutputInfo.targetDirectory].data.push(...filesArray);
            if (subdirArray.length > 0)
                fileStructure[nextOutputInfo.targetDirectory].subdirectories.push(...subdirArray);
        }
        nextOutputInfo.writeOnNextCmd = false;
        // local functions
        function deconstructBuffer(output_buffer) {
            output_buffer.map((v, i, a) => {
                let temp = v.split(" ");
                if (v.includes("dir")) {
                    let subdir = {
                        directory: temp[1],
                        data: [],
                        subdirectories: []
                    };
                    subdirArray.push(subdir);
                }
                else {
                    let temp_size = Number(temp[0]);
                    let temp_name = temp[1];
                    filesArray.push({ fileSize: temp_size, fileName: temp_name });
                }
            });
        }
    }
    // parse input
    function parseCmd(curr_line) {
        let out = { keyword: "", params: [] };
        let line_parts = curr_line.split(" ");
        if (line_parts[1].includes("cd"))
            out.keyword = "cd";
        else if (line_parts[1].includes("ls"))
            out.keyword = "ls";
        else
            throw new RangeError(`line_parts[1] is neither "cd" nor "ls", received: ${line_parts[1]}`);
        // if (curr_line.includes("cd")) out.keyword = "cd";
        // if (curr_line.includes("ls")) out.keyword = "ls";
        // above code here resulted in an error for input "$ cd blhrls" at input line 694. Took me days to pinpoint.
        switch (out.keyword) {
            case "cd":
                out.params = curr_line.slice(5).split(" ");
                break;
            case "ls":
                out.params = curr_line.slice(5).split(" ");
                break;
        }
        return out;
    }
    // manipulate data structure
    function addEmptyDirToStructure(dir) {
        if (dir === "")
            return;
        addFilledDirToStructure(dir, [], []);
    }
    function addFilledDirToStructure(dir, filesArray, subdirArray) {
        if (dir === "")
            return;
        //TODO disabling dirExists here because duplicate dirs exist on multiple levels
        const dirExists = false;
        //let dirExists: boolean = checkStructureHasDir(dir);
        verifyDirHasSubdir(dir, "addFilledDirToStructure");
        if (!dirExists) {
            fileStructure[dir] = {
                directory: dir,
                data: filesArray,
                subdirectories: subdirArray
            };
            entryCount_IOstructure++;
        }
        else {
            throw new Error(`attempted addFilledDirToStructure() for existing dir ${dir}`);
        }
    }
    // check data structure validity
    function verifyDirHasSubdir(dir, caller) {
        if (dir === "/")
            return;
        let out = false;
        let subdir = dir.split("/").slice(-1)[0];
        let expected_parentDir = build_queried_parentDir(dir);
        Object.entries(fileStructure).forEach((valueO, index) => {
            fileStructure[valueO[0]].subdirectories.forEach((valueI) => {
                if (valueI.directory === subdir) {
                    let actual_parentDir = valueO[1].directory;
                    if (actual_parentDir === expected_parentDir)
                        out = true;
                    //TODO  Did not found subdir for /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr/tpqrqtqj
                    // Moving down from /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr to /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr/tpqrqtqj at 121
                    // there are 3 preceding moves for 121, 4 moves successful at 114
                    // subdir is wrong! Should be /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr/tchbjclg/tpqrqtqj according to data structure
                    // checked from input. Program fault is somewhere after input line 671
                    //old error: for dir "/tchbjclg/bljmjwm/cqtmhzbf/ztcbmbw/cmwwg" the resulting expected_parentDir is "//bljmjwm/cqtmhzbf/ztcbmbw/cmwwg/tchbjclg"
                }
            });
        });
        if (!out) {
            throw new Error(`Did not found subdir for ${dir}`);
        }
        function build_queried_parentDir(current_dir) {
            // check if subdir is once or multiple times in current_dir
            let all_elements = current_dir.split("/");
            let temp = "/";
            for (let i = 0; i < all_elements.length - 1; i++) {
                temp += all_elements[i];
                if (i > 0 && (all_elements.length - i) > 2)
                    temp += "/";
            }
            if (temp.length > 1 && temp[temp.length - 1] === "/")
                temp = temp.slice(0, -1);
            if (temp[0] === "/" && temp[1] === "/") {
                throw new Error(`queried_parentDir starting with // for ${temp}`);
            }
            if (temp === undefined)
                throw new Error(`output is undefined for input ${current_dir}`);
            return temp;
        }
    }
    function checkStructureHasDir(dir) {
        let out = false;
        Object.entries(fileStructure).forEach((val, ind) => {
            if (val[1].directory === dir) {
                nextOutputInfo.foundDirectoryIndex = ind;
                out = true;
                return out;
            }
        });
        return out;
    }
}
function getDirectorySize_shallow(dir, fileStructure, verbose, ignoreSubDirs) {
    // find dir in IOstructure
    let index_firstDepth = "init";
    for (let ind in fileStructure) {
        if (fileStructure[ind].directory === dir)
            index_firstDepth = ind;
    }
    if (index_firstDepth === "init")
        throw new Error(`directory ${dir} not found!`);
    let shallow_dirSize = 0;
    for (let i = 0; i < fileStructure[index_firstDepth].data.length; i++) {
        shallow_dirSize += fileStructure[index_firstDepth].data[i].fileSize;
    }
    if (verbose)
        console.log(`Shallow size of directory ${dir} is ${shallow_dirSize}`);
    if (!ignoreSubDirs) {
        if (fileStructure[index_firstDepth].subdirectories.length > 0) {
            throw new Error("dir has subdirectories, counting deep size not implemented!");
        }
    }
    return shallow_dirSize;
}
function getSize_allDirectories(fileStructure, verbose) {
    //TODO give baseDirectory as parameter to make func universal
    let dirsToDo = [];
    let out = [];
    Object.entries(fileStructure).forEach((val, ind) => {
        let currDirectory = val[1].directory;
        if (verbose)
            console.log(`Starting recursive getDirectorySize for: ${currDirectory}`);
        let currSize = getDirectorySize_deep_recursive(currDirectory, 0);
        out.push({ dirSize: currSize, dirName: currDirectory });
    });
    return out;
    // local functions
    function getDirectorySize_deep_recursive(dir, result_param) {
        if (verbose)
            console.log(`getDirectorySize working on: ${dir}`);
        let result_local = 0;
        result_local += result_param;
        // find dir in IOstructure
        let directory_index = "init";
        for (let ind in fileStructure) {
            if (fileStructure[ind].directory === dir)
                directory_index = ind;
        }
        if (directory_index === "init") {
            throw new Error(`directory ${dir} not found!`);
        }
        // process files
        for (let i = 0; i < fileStructure[directory_index].data.length; i++) {
            result_local += fileStructure[directory_index].data[i].fileSize;
        }
        // add subDirs to dirsToDo
        for (let ind in fileStructure[directory_index].subdirectories) {
            let next = dir;
            if (next.slice(-1) !== "/")
                next = next.concat("/");
            dirsToDo.push(next.concat(fileStructure[directory_index].subdirectories[ind].directory));
        }
        // remove dir from dirsToDo
        for (let i = 0; i < dirsToDo.length; i++) {
            if (dirsToDo[i] === dir)
                dirsToDo.splice(i, 1);
        }
        // check for recursion
        if (dirsToDo.length > 0) {
            return getDirectorySize_deep_recursive(dirsToDo[0], result_local);
        }
        else {
            return result_local;
        }
    }
}
setupFileStructure();
solvePartOne();
solvePartTwo();
//# sourceMappingURL=day7_script.js.map
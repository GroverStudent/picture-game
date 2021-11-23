import Mock from "mockjs";
import img1 from "@/assets/img/img1.jpeg";
import img2 from "@/assets/img/img2.jpeg";
import img3 from "@/assets/img/img3.jpg";
import mm from "@/assets/img/mm.jpeg";


Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [{
      id: "2",
      midImg: mm,
      bigImg: img1,
      title: "看春秋",
      description: "都说人生短短几个秋，不醉不罢休。多数人穷其一生，也只是为了生活为了他人了。",
    },
    {
      id: "1",
      midImg: mm,
      bigImg: img2,
      title: "缘起则聚，缘灭则散",
      description: "夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。",
    },
    {
      id: "3",
      midImg: mm,
      bigImg: img3,
      title: "此去经年",
      description: "曾经以为，相爱的人一定要相守，只有相守，情感才能长久。",
    },
  ],
});
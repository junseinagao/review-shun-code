/**
 * 今回のリファクタリングの趣旨
 * arpCodeとcityとenpの配列はそれぞれ添え字で結びついてる値なのでオブジェクトにひとまとめに出来る。
 * なのでこれらを1つの配列とオブジェクトにまとめる。
 */

const app = new Vue({
  el: "#app",
  data: {
    airport: [
      {
        arpCode: "LAX",
        city: "Los Angels",
        enp: "39636042",
        pricetable: [
          "0",
          "158",
          "165",
          "0",
          "0",
          "120",
          "200",
          "168",
          "0",
          "0",
        ],
      },
      {
        arpCode: "SFO",
        city: "San Francisco",
        enp: "25707101",
        pricetable: [
          "158",
          "0",
          "200",
          "0",
          "0",
          "150",
          "130",
          "120",
          "138",
          "0",
        ],
      },
      {
        arpCode: "SAN",
        city: "San Diego",
        enp: "10340164",
        pricetable: [
          "165",
          "200",
          "0",
          "159",
          "179",
          "210",
          "327",
          "0",
          "0",
          "160",
        ],
      },
      {
        arpCode: "OAK",
        city: "Oakland",
        enp: "5934639",
        pricetable: [
          "0",
          "0",
          "159",
          "0",
          "0",
          "130",
          "150",
          "329",
          "154",
          "200",
        ],
      },
      {
        arpCode: "SJC",
        city: "San Jose",
        enp: "5321603",
        pricetable: ["0", "0", "179", "0", "0", "275", "153", "0", "0", "256"],
      },
      {
        arpCode: "SNA",
        city: "Santa Ana",
        enp: "5217242",
        pricetable: [
          "120",
          "150",
          "210",
          "130",
          "275",
          "0",
          "0",
          "210",
          "167",
          "323",
        ],
      },
      {
        arpCode: "SMF",
        city: "Sacramento",
        enp: "4969366",
        pricetable: [
          "200",
          "130",
          "327",
          "150",
          "153",
          "0",
          "0",
          "218",
          "190",
          "0",
        ],
      },
      {
        arpCode: "ONT",
        city: "Ontario",
        enp: "2104625",
        pricetable: [
          "168",
          "120",
          "0",
          "329",
          "0",
          "210",
          "218",
          "0",
          "215",
          "0",
        ],
      },
      {
        arpCode: "BUR",
        city: "Burbank",
        enp: "2077892",
        pricetable: [
          "0",
          "138",
          "0",
          "154",
          "0",
          "167",
          "190",
          "215",
          "0",
          "120",
        ],
      },
      {
        arpCode: "LGB",
        city: "Long Beach",
        enp: "1386357",
        pricetable: [
          "0",
          "0",
          "160",
          "200",
          "256",
          "323",
          "0",
          "0",
          "120",
          "0",
        ],
      },
    ],
    targetCode: "",
    targetCity: "",
    targetEnp: "",
    found: false,
    dep: "",
    des: "",
    targetPrice: "",
  },
  methods: {
    search: function () {
      this.found = false; // なぜ文字列で"true"と""でv-if v-elseが動くのか:→"true"これはtrulyな値 true と判断される。→""これはfalsyな値。falseと判断される。s
      for (let i = 0; i < this.arpCode.length; i++) {
        if (this.targetCode == this.arpCode[i]) {
          this.found = true;
          this.targetCity = this.city[i];
          this.targetEnp = this.enp[i];
        }
      }
    },
    recipt: function () {
      let depIndex = -1;
      let desIndex = -1;
      this.targetPrice = 0;
      for (let i = 0; i < this.index; i++) {
        if (this.dep == this.arpCode[i]) {
          depIndex = i;
        }
        if (this.des == this.arpCode[i]) {
          desIndex = i;
        }
      }
      // js では == と === がある。 == は比較するモノの型変換を勝手に行う。 === は型変換を行わない。
      if (depIndex === -1 && desIndex === -1) {
        this.computePrice(depIndex, desIndex);
      }
    },
    computePrice: function (depIndex, desIndex) {
      this.targetPrice = this.price[this.depIndex][this.desIndex];
    },
  },
});

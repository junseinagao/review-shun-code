/**
 * 今回のリファクタリングの趣旨
 * arpCodeとcityとenpの配列はそれぞれ添え字で結びついてる値なのでオブジェクトにひとまとめに出来る。
 * なのでこれらを1つのオブジェクトにまとめる。{{},{},{}}←この様なデータ構造
 * [{},{},{}]←この様なデータ構造の方が楽かも知れない。
 */

const app = new Vue({
  el: "#app",
  data: {
    airport: {
      LAX: {
        index: 0,
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
      SFO: {
        index: 1,
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
      SAN: {
        index: 2,
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
      OAK: {
        index: 3,
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
      SJC: {
        index: 4,
        arpCode: "SJC",
        city: "San Jose",
        enp: "5321603",
        pricetable: ["0", "0", "179", "0", "0", "275", "153", "0", "0", "256"],
      },
      SNA: {
        index: 5,
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
      SMF: {
        index: 6,
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
      ONT: {
        index: 7,
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
      BUR: {
        index: 8,
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
      LGB: {
        index: 9,
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
    },
    targetCode: "",
    targetCity: "",
    targetEnp: "",
    found: false,
    dep: "",
    des: "",
    targetPrice: 0,
  },
  methods: {
    search: function () {
      this.found = false; // なぜ文字列で"true"と""でv-if v-elseが動くのか:→"true"これはtrulyな値 true と判断される。→""これはfalsyな値。falseと判断される。
      if (this.airport[this.targetCode] != null) {
        this.found = true;
        this.targetCity = this.airport[this.targetCode].city;
        this.targetEnp = this.airport[this.targetCode].enp;
      }
    },
    recipt: function () {
      this.targetPrice = 0;
      if (this.airport[this.dep] != null && this.airport[this.sep] != null) {
        this.computePrice();
      }
    },
    computePrice: function () {
      const index = this.airport[this.dep].index;
      const price = this.airport[this.dep].pricetable[index];
      this.targetPrice = price;
    },
  },
});

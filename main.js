const app = new Vue({
  el: "#app",
  data: {
    arpCode: [
      "LAX",
      "SFO",
      "SAN",
      "OAK",
      "SJC",
      "SNA",
      "SMF",
      "ONT",
      "BUR",
      "LGB",
    ],
    city: [
      "Los Angels",
      "San Francisco",
      "San Diego",
      "Oakland",
      "San Jose",
      "Santa Ana",
      "Sacramento",
      "Ontario",
      "Burbank",
      "Long Beach",
    ],
    enp: [
      "39636042",
      "25707101",
      "10340164",
      "5934639",
      "5321603",
      "5217242",
      "4969366",
      "2104625",
      "2077892",
      "1386357",
    ],
    price: [
      ["0", "158", "165", "0", "0", "120", "200", "168", "0", "0"],
      ["158", "0", "200", "0", "0", "150", "130", "120", "138", "0"],
      ["165", "200", "0", "159", "179", "210", "327", "0", "0", "160"],
      ["0", "0", "159", "0", "0", "130", "150", "329", "154", "200"],
      ["0", "0", "179", "0", "0", "275", "153", "0", "0", "256"],
      ["120", "150", "210", "130", "275", "0", "0", "210", "167", "323"],
      ["200", "130", "327", "150", "153", "0", "0", "218", "190", "0"],
      ["168", "120", "0", "329", "0", "210", "218", "0", "215", "0"],
      ["0", "138", "0", "154", "0", "167", "190", "215", "0", "120"],
      ["0", "0", "160", "200", "256", "323", "0", "0", "120", "0"],
    ],
    targetCode: "",
    targetCity: "",
    targetEnp: "",
    found: false,
    index: 10,
    dep: "",
    des: "",
    depIndex: "",
    desIndex: "",
    targetPrice: "",
  },
  methods: {
    search: function () {
      this.found = false;
      for (let i = 0; i < this.index; i++) {
        if (this.targetCode == this.arpCode[i]) {
          this.found = true;
          this.targetCity = this.city[i];
          this.targetEnp = this.enp[i];
        }
      }
    },
    recipt: function () {
      this.targetPrice = 0;
      let i = 0;
      for (i = 0; i < this.index; i++) {
        if (this.dep == this.arpCode[i]) {
          this.depIndex = i;
        }
        if (this.des == this.arpCode[i]) {
          this.desIndex = i;
        }
      }
      this.targetPrice = this.price[this.depIndex][this.desIndex];
    },
  },
});

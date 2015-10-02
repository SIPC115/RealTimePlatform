// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  replace: true,
  props: ['data', 'columns', 'filter-key'],
  data: function () {
    return {
      data: null,
      columns: null,
      sortKey: '',
      filterKey: '',
      reversed: {}
    }
  },
  compiled: function () {
    // initialize reverse state
    var self = this
    this.columns.forEach(function (key) {
      self.reversed.$add(key, false)
    })
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.reversed[key] = !this.reversed[key]
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})


// bootstrap the demo
var demo11 = new Vue({
  el: '#demo11',
  data: {
    // searchQuery: '',
    // gridColumns: ['name', 'power'],
    hello: [{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 2222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 2252
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 2212
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 2222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    },{
        '流量对账测试' : "测试",
        '流量类型' : "联通",
        '流量大小' : "50M",
        '价格' : 222
    }]
  },
  filters: {
    'test' : function(key){
        return key + ' ==> 过滤器test'
    }
  }
})


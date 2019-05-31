!function(){
  /** 数据是否已经初始化过 */
  const isInit = localStorage.getItem('isInit') === 'true';

  // 没有初始化过
  // 那么进行初始化
  if( !isInit ){

    const GCJSDATA = [
      {
        name: '某某市人民法院审判法庭工程, 招标编号：GC20190005',
        content: `1.工程名称: 某某市人民法院审判法庭工程\n2.项目审批机关名称某某市发展和改革委员会\n3.招标人: 某某市人民法院\n4.资金来源: 财政\n5.交易项目性质: 建筑工程`,
        time: '2019/05/09',
        state: 0
      }, {
        name: '某某县看守所武警中队营房建设项目, 招标编号：GC20190004',
        content: `1.工程名称：某某县看守所武警中队营房建设项目\n2.项目审批机关名称：某某县发展和改革委员会\n3.招标人：某某县公安局\n4.资金来源：财政资金\n5.项目交易性质:房屋建筑业`,
        time: '2019/4/23',
        state: 0
      }, {
        name: '某某市安置点一期工程, 招标编号：GC20190003',
        content: `1.工程名称：某某县看守所武警中队营房建设项目\n2.项目审批机关名称：某某县发展和改革委员会\n3.招标人：某某县公安局\n4.资金来源：财政资金\n5.项目交易性质:房屋建筑业`,
        time: '2019/4/10',
        state: 0
      }, {
        name: '某某村安置点项目工程监理, 招标编号：GC20190002',
        content: `1.工程名称：某某县看守所武警中队营房建设项目\n2.项目审批机关名称：某某县发展和改革委员会\n3.招标人：某某县公安局\n4.资金来源：财政资金\n5.项目交易性质:房屋建筑业`,
        time: '2019/4/06',
        state: 0
      }, {
        name: '某某市某镇路扩面延伸工程, 招标编号：GC20190001',
        content: `1.工程名称：某某县看守所武警中队营房建设项目\n2.项目审批机关名称：某某县发展和改革委员会\n3.招标人：某某县公安局\n4.资金来源：财政资金\n5.项目交易性质:房屋建筑业`,
        time: '2019/3/28',
        state: 0
      }
    ];
    const ZFCGDATA = [
      {
        name: '公开招标：某某市某社区服务中心老旧小区基础性物业管理服务, 项目编号：2019CGH003',
        content: `按法定授权，某某市公共资源交易中心受采购人某社区公共服务中心的委托，现对某某市某社区公共服务中心老旧小区基础性物业管理服务项目项目进行公开招标，欢迎具备条件的国内投标供应商参加投标。`,
        time: '2019/05/26',
        state: 0
      }, {
        name: '公开招标：2019年某大学多媒体教室设备项目, 项目编号：2019CGH002',
        content: `按法定授权，某某市公共资源交易中心受采购人某大学的委托，现对2019年某大学多媒体教室设备项目进行公开招标，欢迎具备条件的国内投标供应商参加投标。`,
        time: '2019/04/22',
        state: 0
      }, {
        name: '公开招标：某河流域及周边综合治理保护工程设计, 项目编号：2019CGH001',
        content: `按法定授权，某某市公共资源交易中心受采购人某社区公共服务中心的委托，现对2019年某河流域及周边综合治理保护工程设计，欢迎具备条件的国内投标供应商参加投标。`,
        time: '2019/04/22',
        state: 0
      }
    ];

    GCJSDATA.$concat(
      GCJSDATA, GCJSDATA
    );
    ZFCGDATA.$concat(
      ZFCGDATA, ZFCGDATA
    );
    
    
    

    /** 数据库对象 */
    const db = openDatabase( '172712250017', '1.0', 'CL', 2 * 1024 * 1024 );

    // 开启事务插入数据
    db.transaction(( tx ) => {
      // 创建工程建设数据库
      tx.executeSql(`create table gcjs( name, content, time, state )`);
      // 创建政府采购数据库
      tx.executeSql(`create table zfcg( name, content, time, state )`);

      // 插入工程建设数据
      GCJSDATA.forEach( data => {
        tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( '${ data.name }', '${ data.content }', '${ data.time }', '${ data.state }' )`);
      });
      // 插入政府采购数据
      ZFCGDATA.forEach( data => {
        tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '${ data.name }', '${ data.content }', '${ data.time }', '${ data.state }' )`);
      });

      // 标识已初始化数据
      localStorage.setItem( 'isInit', 'true' );
    });
  }

}();
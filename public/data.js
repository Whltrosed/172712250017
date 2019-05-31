!function(){
  /** 数据是否已经初始化过 */
  const isInit = localStorage.getItem('isInit') === 'true';

  // 没有初始化过
  // 那么进行初始化
  if( !isInit ){
    /** 数据库对象 */
    const db = openDatabase( '172712250017', '1.0', 'CL', 2 * 1024 * 1024 );

    // 开启事务插入数据
    db.transaction(( tx ) => {
      // 创建工程建设数据库
      tx.executeSql(`create table gcjs( name, content, time, state )`);
      // 创建政府采购数据库
      tx.executeSql(`create table zfcg( name, content, time, state )`);

      // 插入工程建设数据
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( '某某市人民法院审判法庭工程, 招标编号：GC20190003', '${
`
  1.工程名称: 某某市人民法院审判法庭工程
  2.项目审批机关名称某某市发展和改革委员会
  3.招标人: 某某市人民法院
  4.资金来源: 财政
  5.交易项目性质: 建筑工程
`
      }', '2019/05/09', 0 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( '某某县看守所武警中队营房建设项目, 招标编号：GC20190156', '${
`
  1.工程名称：某某县看守所武警中队营房建设项目
  2.项目审批机关名称：某某县发展和改革委员会
  3.招标人：某某县公安局
  4.资金来源：财政资金
  5.项目交易性质:房屋建筑业
`
      }', '2019/4/23', 0 )`);
      // 插入政府采购数据
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：某某市某社区服务中心老旧小区基础性物业管理服务, 项目编号：2019CGF021', '${
`
  按法定授权，某某市公共资源交易中心受采购人某社区公共服务中心的委托，现对某某市某社区公共服务中心老旧小区基础性物业管理服务项目项目进行公开招标，欢迎具备条件的国内投标供应商参加投标。
`
      }', '2019/05/26', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：2019年某大学多媒体教室设备项目, 项目编号：2019CGH026', '${
`
  按法定授权，某某市公共资源交易中心受采购人某大学的委托，现对2019年某大学多媒体教室设备项目进行公开招标，欢迎具备条件的国内投标供应商参加投标。
`
      }', '2019/04/22', 0 )`);

      // 标识已初始化数据
      localStorage.setItem( 'isInit', 'true' );
    });
  }

}();
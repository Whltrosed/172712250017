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
      // 插入工程建设数据
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 1', 'content - 1', '2019-05-30', 0 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 2', 'content - 2', '2019-05-29', 0 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 3', 'content - 3', '2019-05-28', 0 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 4', 'content - 4', '2019-05-27', 0 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 5', 'content - 5', '2019-05-26', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 6', 'content - 6', '2019-05-25', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 7', 'content - 7', '2019-05-24', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 8', 'content - 8', '2019-05-23', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 9', 'content - 9', '2019-05-22', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 10', 'content - 10', '2019-05-21', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 11', 'content - 11', '2019-05-20', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 12', 'content - 12', '2019-05-19', 1 )`);
      tx.executeSql(`insert into gcjs ( name, content, time, state ) values ( 'name - 13', 'content - 13', '2019-05-18', 1 )`);

      // 创建政府采购数据库
      tx.executeSql(`create table zfcg( name, content, time, state )`);
      // 插入政府采购数据
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 1', 'content - 1', '2019-04-30', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 2', 'content - 2', '2019-04-29', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 3', 'content - 3', '2019-04-28', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 4', 'content - 4', '2019-04-27', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 5', 'content - 5', '2019-04-26', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 6', 'content - 6', '2019-04-25', 0 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 7', 'content - 7', '2019-04-24', 1 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 8', 'content - 8', '2019-04-23', 1 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 9', 'content - 9', '2019-04-22', 1 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 10', 'content - 10', '2019-04-21', 1 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 11', 'content - 11', '2019-04-20', 1 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 12', 'content - 12', '2019-04-19', 1 )`);
      tx.executeSql(`insert into zfcg ( name, content, time, state ) values ( '公开招标：name - 13', 'content - 13', '2019-04-18', 1 )`);

      // 标识已初始化数据
      localStorage.setItem( 'isInit', 'true' );
    });
  }

}();
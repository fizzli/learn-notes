# MySQL数据库



## MySQL数据库创建

create database 数据库名；

```mysql
example. create database polishan;
```



## MySQL数据库删除

drop database 数据库名;

```mysql
example. drop database polishan;
```



## 选择数据库

use 数据库名;

```MYSQL
example. use polishan;
```



## MySQL数据类型

MySQL支持多种类型，大致分为三种：数值、日期/时间、字符串。

数值：tityint,smallint,mediumint,int/integer,bigint,float,double,decimal

日期/时间:date,time,year,datetime,timestamp

字符串:char,varchar,tinyblob,tinytext,blob,text,mediumblob,mediumtext,longblob,longtext



## 创建数据表

create table table_name(column_name,column_type)

```mysql
/*example:*/
create table if not exists `runoob_tbl`(
`runoob_id` int unsigned auto_increment,
`runoob_title` varchar(100) not null,
`runoob_author` varchar(40) not null,
`submission_date` date,
primary key(`runoob_id`)
)engine=InnoDB default charset=utf8;
```



## 删除数据表

drop table table_name;

```mysql
example:
drop table runoob_tbl;
```



## 插入数据

insert into table_name(field1,field2,...fieldn) values(value1,value2,...valuen);

```mysql
/*example:*/
insert into runoob_tbl(runoob_title,runoob_author,submission_date)
values ('学习MySQL','菜鸟教程',now());
```



## 查询数据

### 概述

select column_name,column_name from table_name

[where clause]

[limit n]

[offset m]

```mysql
/*example:*/
select runoob_title,runoob_auther,submisson_date from runoob_tbl 
where runoob_id =1;

select * from runoob_tbl limit 2 offset 2;/*查找从第三条起的两条记录*/
```

### MySQL WHERE子句

select field1,field2...fieldn from table_name1,table_name2...[where condition1 [and [or]] condition2...]



##MySQL UPDATE 修改数据

update table_name set field1=new-value1,field2=new-value2 [where Clause]

```mysql
/*example*/
update runoob_tbl set runoob_title="学习oracle" where runoob_id=1;
```



## MySQL DELETE 删除数据

delete from table_name [where Clause];

```mysql
/*example*/
delete from runoob_tbl where runoob_id=3;
```



## MySQL LIKE子句

select field1,field2...fieldn from table_name where filed1 like condition [and [or]] field2='somevalue';

```mysql
/*example*/
select * from runoob_tbl where runoob_author like '%COM';
```



## MySQL UNION/UINON ALL

union 连接两个以上的select结果集合，过滤重复。

union all 连接两个以上的select结果集合，不过滤重复。



## MySQL 排序

```mysql
select * from runoob_tbl order by runoob_tbl desc;/*desc 降序 asc 升序*/
```



## MySQL 分组

```mysql
select name ,count(*) from employee_tbl group by name;
/*with rollup:在分组统计的基础上再进行相同的统计*/
```



## MySQL连接

inner join

left join

right join



## MySQL 正则表达式

```mysql
/*查找 name 字段中以'st'为开头的所有数据：*/
select name from persion_tbl where name regexp '^st';
/*查找 name 字段中以'ok'为结尾的所有数据：*/
select name from persion_tbl where name regexp 'ok$';
/*查找 name 字段中以元音字符(aeiou)开头或以'ok'字符串结尾的所有数据：*/
select name from persion_tbl where name regexp '^[aeiou]|ok$'
```



## MySQL 事务

MySQL事务用来处理操作量大，复杂度高的数据。

事务必须满足四个条件(ACID):原子性、一致性、隔离性、持久性。

```mysql
1.
begin;
commit;
rollback;

2.set autocommit=0;/*禁止自动提交*/
```



## MySQL 修改表 ALTER

```mysql
 create table testalter_tbl
    -> (
    -> i INT,
    -> c CHAR(1)
    -> );
Query OK, 0 rows affected (0.05 sec)
mysql> SHOW COLUMNS FROM testalter_tbl;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| i     | int(11) | YES  |     | NULL    |       |
| c     | char(1) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)


/*删除字段*/
alter table testalter_tbl drop i;
/*新增字段*/
alter table testalter_tbl add i int;
/*修改字段
modify:修改字段类型
change:修改字段名字及类型
*/
alter table testalter_tbl modify c char(10);
alter table testalter_tbl change c j char(10);
```



## MySQL 索引

索引可以降低搜索数据的速度，但是太多所以会导致更新表的速度变低。



### 普通索引

```mysql
/*添加索引*/
1.create index indexName on mytable(username(length));
2.alter table tableName add index indexName(columnName);
/*删除索引*/
drop index [indexName] on mytable;
```



### 唯一索引

```mysql
/*添加索引*/
create unique index indexName on mytable(username(length));
alter table tableName add unique [indexName] (username(length));
```



```mysql
/*显示索引信息*/
show index from tableName;
```



## MySQL临时表

```mysql
create temporary table tableName();
```



## MySQL 复制表

```mysql
/*查看表结构*/
show create table tableName;
```



## MySQL 函数








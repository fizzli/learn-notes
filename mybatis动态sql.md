# mybatis动态sql

## if where

格式：

```xml
select * from address

<where>

<if test="city!= null and city!=''">

	and city=#{city}

</if>

<if test="street!= null and street!=''">

	and street#{street}

</if>

</where>
```



## if set

格式：



```xml
update address

<set>

<if test="city!= null and city!=''">

	 city=#{city},

</if>

<if test="street!= null and street!=''">

	 street#{street},

</if>

</set>

<where>
	id=#{id}
</where> 	

```



## choose when otherwise

choose 只能选定某一个

格式：

```xml
<select id="query" resultType="com.polishan.pojo.Address">
select * from address
<where>
	<choose>
    	<when test="country != null">
        	and country = #{country}
        </when>
        <when test="state != null">
        	and state = #{state}
        </when>
        <otherwise>
        	and city = #{city}
        </otherwise>
    </choose>
</where>
</select>
```

## trim

```xml
select * from 
<trim>

</trim>
```



## foreach



## bind


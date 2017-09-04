select * from tickets
where specific_performance_id = $1
order by id;
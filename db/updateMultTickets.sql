update tickets    
set available = $5   
where specific_performance_id = $1 and section in $2 and seat_row in $3 and num in $4;
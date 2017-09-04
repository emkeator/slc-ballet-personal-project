update tickets    
set available = $5   
where specific_performance_id = $1 and section = $2 and seat_row = $3 and num = $4;
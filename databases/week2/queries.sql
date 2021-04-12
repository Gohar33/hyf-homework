use hyf_lesson2;

SELECT user.name, user.email, task.title, task.description, user_task.task_id
FROM task
JOIN user 
ON user.id=task.id
JOIN user_task
ON user.id = user_task.user_id
WHERE email LIKE "%@spotify.com%";

SELECT user.name, task.title, status.name AS status_name
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
JOIN status ON status.id = task.status_id
WHERE user.name LIKE "%Donald Duck%"
AND status.name LIKE "%Not started%";

-- Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT user.name, task.title, status.name AS status_name
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
JOIN status ON status.id = task.status_id
WHERE user.name LIKE "%Maryrose Meadows%"
AND month(created)= 09;


-- Find how many tasks where created in each month
SELECT COUNT(*), monthname(created)
FROM task
GROUP BY monthname(created);






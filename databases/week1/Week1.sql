-- 1. Find out how many tasks are in the task table*/
SELECT COUNT(*)
FROM task;
-- 35

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*)
FROM task
WHERE due_date IS null;
-- 8

-- 3. Find all the tasks that are marked as done
SELECT *
FROM task
INNER JOIN status ON task.status_id = status.id
WHERE name LIKE "%Done";
-- found all done

-- 4. Find all the tasks that are not marked as done
SELECT *
FROM task
INNER JOIN status ON task.status_id = status.id
WHERE name NOT LIKE "%Done";
-- found not started or in progress

-- 5. Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;
-- starts with 25 Look at apartments in Ørestad created on 2017-10-30

-- 6. Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;
-- only one row with 25 Look at apartments in Ørestad

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT task.title, task.due_date, status.name
FROM task
INNER JOIN status ON task.status_id = status_id
WHERE title LIKE '%database%' OR description LIKE '%database%';
-- got 5 rows

-- 8 Get the title and status (as text) of all tasks
SELECT task.title, status.name AS text
FROM task
INNER JOIN status ON task.status_id=status.id;
-- got title and text status

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*)
FROM task
INNER JOIN status ON task.status_id=status.id
GROUP BY status.name;
-- 3 status names with counts


-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(*)
FROM task
INNER JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY COUNT(*)DESC;
-- upper row starts with count 15


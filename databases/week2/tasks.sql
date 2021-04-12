use hyf_lesson1;

-- Add a task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
values("Homework", "Finish your homework", NOW(),NOW(),
 "2021-04-11 12:00:00","1", "2");
 
 
 -- Change the title
 UPDATE task
 SET title = "Lost In Homework"
 WHERE id=47;

-- Change the due date
UPDATE task
SET due_date = "2021-04-17 12:00:00"
WHERE id=47;

-- Change status
UPDATE task
SET status_id = "3"
WHERE id=47;

-- Mark a task as complete
UPDATE task
SET description = "complete"
WHERE id=47;

-- Delete a task
DELETE
FROM task
WHERE id = 47;
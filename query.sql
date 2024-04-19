

SELECT 
    students.id AS student_id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    course_id,
    name,
    type
  FROM students
  RIGHT JOIN courses
  ON students.course_id = courses.id;














-- UPDATE users SET password = 'newpass' WHERE id = 2;

-- SELECT * FROM users ORDER BY id;
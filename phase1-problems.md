## T1 — Python OOP: Classes, Modules, Error Handling

**Source:** [Real Python OOP Guide](https://realpython.com/python3-object-oriented-programming/) + [YouTube](https://www.youtube.com/watch?v=Ej_02ICOIgs)

---

**Problem 1 — Define a class (easy)**
Create a `BugReport` class with `title`, `severity` attributes and `status` defaulting to `"open"`. Add `resolve()` method that sets status to `"closed"` and `summary()` that prints a one-line description.
```
Bug: Login fails on Safari | Severity: high | Status: open
Bug: Login fails on Safari | Severity: high | Status: closed
```

---

**Problem 2 — Multiple instances (easy)**
Create a `TestCase` class with `name`, `expected`, `actual`. Add `passed()` returning True if expected equals actual, and `result()` printing PASS or FAIL.
```
PASS: Login test
FAIL: Price test
```

---

**Problem 3 — Object containing objects (medium)**
Create a `TestSuite` class with an empty list on creation. Add `add(tc)`, `run()` (calls `result()` on every test), and `summary()` printing passed/failed count.
```
PASS: Login
FAIL: Logout
PASS: Home
Passed: 2 | Failed: 1
```

---

**Problem 4 — `__str__` method (easy)**
Add `__str__` to `BugReport` so `print(bug)` shows its details without calling `.summary()`.
```
Bug: Dark mode broken | Severity: low | Status: open
```

---

**Problem 5 — Class variable (easy)**
Add a class variable `count` to `BugReport` that increments every time a new bug is created.
```
3
```

---

**Problem 6 — Private attribute + getter (medium)**
Create `UserAccount` with private `__balance`. Add `get_balance()` and `deposit(amount)` methods.
```
1000
1500
```

---

**Problem 7 — @property (medium)**
Modify `UserAccount` so balance is accessed like `user.balance` instead of `user.get_balance()`.
```
1000
1500
```

---

**Problem 8 — Inheritance (medium)**
Base class `Animal` with `speak()` printing `"..."`. Child classes `Dog` and `Cat` override it.
```
Woof!
Meow!
```

---

**Problem 9 — super() (medium)**
Base class `Employee` with `name` and `salary`. Child class `Manager` adds `team_size` using `super()`.
```
Manager: Arun | Salary: 80000 | Team size: 5
```

---

**Problem 10 — Polymorphism (medium)**
Three classes `Circle`, `Rectangle`, `Triangle` each with `area()`. One function `print_areas(shapes)` handles all three.
```
Circle area: 78.54
Rectangle area: 24
Triangle area: 10.0
```

---

**Problem 11 — try/except (easy)**
Function `divide(a, b)` catches `ZeroDivisionError` and prints a clean message.
```
5.0
Cannot divide by zero
```

---

**Problem 12 — Multiple exceptions (medium)**
Function `parse_age(value)` handles `ValueError` for non-numbers and raises custom `InvalidAgeError` if out of 0–120 range.
```
25
Not a number: abc
Invalid age: 150. Must be between 0 and 120.
```

---

**Problem 13 — Custom exception (medium)**
`withdraw(amount)` on `UserAccount` raises `InsufficientFundsError` if amount exceeds balance.
```
Withdrew 200. Remaining balance: 800
Insufficient funds: tried to withdraw 1500, balance is 800
```

---

**Problem 14 — finally (easy)**
Function `read_file(filename)` always prints a closing message whether it succeeds or fails.
```
<file contents>
Finished attempting to read file.

File not found.
Finished attempting to read file.
```

---

**Problem 15 — Modules (medium)**
Split `BugReport` into `bug_report.py`. Import and use it in `main.py`. Add `if __name__ == "__main__":` with a quick test in `bug_report.py`.
```
# Running bug_report.py directly:
Quick test: Bug: Test bug | Severity: low | Status: open

# Running main.py:
Bug: Login broken | Severity: high | Status: open
Bug: UI glitch | Severity: low | Status: open
Bug: API timeout | Severity: medium | Status: open
```

---

## T2 — REST APIs: requests lib, JSON, Auth Headers

**Source:** [Real Python — requests](https://realpython.com/python-requests/) + [YouTube](https://www.youtube.com/watch?v=tb8gHvYlCFs)
**Practice API:** https://httpbin.org (free, no signup)

---

**Problem 1 — Basic GET request**
Make a GET request to `https://httpbin.org/get` and print the status code and `url` field from JSON.
```
Status: 200
URL: https://httpbin.org/get
```

---

**Problem 2 — Read JSON response**
GET `https://httpbin.org/json` and print the title field from the response.
```
Wake up to WonderWidgets!
```

---

**Problem 3 — Query parameters**
GET `https://httpbin.org/get` passing `name=Arun` and `city=Chennai` as query params. Print the args.
```
{'city': 'Chennai', 'name': 'Arun'}
```

---

**Problem 4 — POST with JSON body**
POST to `https://httpbin.org/post` with `title`, `severity`, `status` in JSON body. Print the `json` field.
```
{'severity': 'high', 'status': 'open', 'title': 'Login broken'}
```

---

**Problem 5 — Custom headers**
GET `https://httpbin.org/headers` with a custom header `X-Tester-Name: Arun`. Print that header from response.
```
Arun
```

---

**Problem 6 — Auth header**
GET `https://httpbin.org/bearer` with a Bearer token in Authorization header. Print authenticated status and token.
```
Authenticated: True
Token: mytoken123
```

---

**Problem 7 — Status code handling**
Request `/status/200`, `/status/404`, `/status/500`. Print a message for each.
```
200: Success
404: Not found
500: Server error
```

---

**Problem 8 — raise_for_status()**
GET `https://httpbin.org/status/404`. Use `raise_for_status()` to catch the error.
```
HTTP error: 404 Client Error: NOT FOUND for url: https://httpbin.org/status/404
```

---

**Problem 9 — Timeout handling**
GET `https://httpbin.org/delay/5` with `timeout=2`. Handle the exception cleanly.
```
Request timed out. Server took too long to respond.
```

---

**Problem 10 — POST form data**
POST to `https://httpbin.org/post` using `data=` with `username=arun` and `role=tester`. Print the `form` field.
```
{'role': 'tester', 'username': 'arun'}
```

---

**Problem 11 — Response headers**
GET `https://httpbin.org/get` and print the `Content-Type` from response headers.
```
application/json
```

---

**Problem 12 — PUT request**
PUT to `https://httpbin.org/put` with `id` and `status` in body. Print the `json` field.
```
{'id': 42, 'status': 'closed'}
```

---

**Problem 13 — DELETE request**
DELETE `https://httpbin.org/delete` with an `id` in the body. Print the `json` field confirming deletion.
```
{'id': 7}
```

---

**Problem 14 — Reusable API client class**
Create `APIClient` with `base_url` and optional `token`. Add `get(endpoint)` and `post(endpoint, payload)` methods that auto-add auth header if token provided.
```
Status: 200
Authenticated: True
```

---

**Problem 15 — Chain two API calls**
GET `https://httpbin.org/uuid` for a unique ID. Immediately POST it to `https://httpbin.org/post` as `request_id`. Print both.
```
Got UUID: <some-uuid>
Posted request_id: <same-uuid>
```

---

## T3 — FastAPI Basics

**Source:** [FastAPI official docs](https://fastapi.tiangolo.com/tutorial/) + [YouTube](https://www.youtube.com/watch?v=0sOvCWFmrtA)
**Run server:** `uvicorn main:app --reload`

---

**Problem 1 — First endpoint**
Create a FastAPI app with GET `/` returning a welcome message.
```json
{"message": "Welcome to QA Forge API"}
```

---

**Problem 2 — Path parameter**
Add GET `/user/{name}` that greets by name.
```json
{"message": "Hello, Arun!"}
```

---

**Problem 3 — Integer path parameter**
Add `/item/{item_id}` where `item_id` must be integer. Strings auto-rejected.
```json
{"item_id": 42}
// "abc" → 422 Unprocessable Entity
```

---

**Problem 4 — Query parameter**
Add `/search` with optional `keyword` query param defaulting to `"all"`.
```json
{"searching_for": "login"}
{"searching_for": "all"}
```

---

**Problem 5 — Query param with type**
Add `/bugs` with integer `limit` defaulting to 10.
```json
{"fetching": 5}
{"fetching": 10}
```

---

**Problem 6 — POST with Pydantic model**
Create `Bug` model with `title` and `severity`. POST `/bugs` accepts and returns it.
```json
{"title": "Login broken", "severity": "high"}
```

---

**Problem 7 — Optional field**
Add optional `priority` (int, default 1) to `Bug`. Return full object.
```json
{"title": "Dark mode", "severity": "low", "priority": 1}
```

---

**Problem 8 — Multiple endpoints**
GET `/bugs` returns hardcoded list. POST `/bugs` appends to list. GET `/bugs/{bug_id}` returns one by index.
```json
[{"title": "Login broken", "severity": "high"}]
```

---

**Problem 9 — Custom status code**
Make POST `/bugs` return HTTP `201 Created`.
```
Status: 201 Created
```

---

**Problem 10 — Path + query combined**
`/users/{user_id}/bugs` with `status` query param defaulting to `"open"`.
```json
{"user_id": 3, "status": "open"}
```

---

**Problem 11 — HTTPException**
In GET `/bugs/{bug_id}`, raise 404 if index doesn't exist.
```json
{"detail": "Bug not found"}
```

---

**Problem 12 — Response model**
Create `BugResponse` that excludes `priority` from output. Use as `response_model`.
```json
{"title": "Login broken", "severity": "high"}
```

---

**Problem 13 — Startup event**
Add `@app.on_event("startup")` that prints a message when server starts.
```
API is starting up...
INFO: Uvicorn running on http://127.0.0.1:8000
```

---

**Problem 14 — Explore Swagger UI**
Run your app and open `http://127.0.0.1:8000/docs`. Test all your endpoints from the browser UI. Describe what you see. No code needed.

---

**Problem 15 — Full mini API**
Complete `/testcases` API — POST to create, GET all, GET by id, 404 if not found. Use `TestCase` Pydantic model with `name`, `expected`, `actual`.

---

## T4 — Git Properly

**Source:** [Pro Git book](https://git-scm.com/book/en/v2) + [YouTube](https://www.youtube.com/watch?v=RGOj5yH7evk)

---

**Problem 1 — Init and first commit**
Init a repo, create README.md, make first commit. Show git log.
```
commit a1b2c3d
    initial commit
```

---

**Problem 2 — Stage specific files**
Create 3 files. Stage only 2. Show `git status` before and after commit.
```
Changes to be committed: file1.py, file2.py
Untracked files: file3.py
```

---

**Problem 3 — Create a branch**
Create and switch to `feature/add-login-test`. Verify current branch.
```
* feature/add-login-test
  main
```

---

**Problem 4 — Commit on a branch**
Create `login_test.py` on feature branch and commit. Switch to main — file should not exist there.
```
// On feature: login_test.py exists
// On main: login_test.py not found
```

---

**Problem 5 — Merge branch**
Merge `feature/add-login-test` into `main`. Verify file now exists on main.
```
Fast-forward
 login_test.py | 0
 1 file changed
```

---

**Problem 6 — Delete branch**
Delete feature branch after merge. List remaining branches.
```
* main
```

---

**Problem 7 — View history**
Make 3 commits. Show `git log --oneline`.
```
e4f5g6h add login test
b2c3d4e add test suite
a1b2c3d initial commit
```

---

**Problem 8 — Undo last commit**
Make a commit then undo with `git reset --soft HEAD~1`. File still there but uncommitted.
```
Changes to be committed: your_file.py
```

---

**Problem 9 — .gitignore**
Create `.gitignore` ignoring `__pycache__/`, `*.pyc`, `.env`. Verify they don't appear in `git status`.
```
nothing to commit, working tree clean
```

---

**Problem 10 — Push to GitHub**
Add GitHub remote and push main. Verify it appears on GitHub.
```
Branch 'main' set up to track remote 'origin/main'
```

---

**Problem 11 — Pull changes**
Edit README directly on GitHub. Pull locally. Show updated file.
```
Fast-forward
 README.md | 1 +
```

---

**Problem 12 — Full PR workflow**
Create branch → commit → push to GitHub → open Pull Request → merge on GitHub → pull main locally.

---

**Problem 13 — Commit conventions**
Make 5 commits using `feat:`, `fix:`, `docs:`, `test:`, `chore:` prefixes.
```
feat: add login test case
fix: correct expected value
docs: update README
test: add regression suite
chore: add .gitignore
```

---

**Problem 14 — Stash**
Make changes without committing. Stash, switch branch, come back, pop stash.
```
Saved working directory: stash@{0}
Applied stash@{0}
```

---

**Problem 15 — Push QA Forge**
Push your `qa-forge` project to GitHub with `.gitignore`, meaningful commits, and a proper README. This is your real deliverable.

---

## T5 — LLM API Basics

**Source:** [Anthropic API docs](https://docs.anthropic.com/en/api/getting-started) + [YouTube](https://www.youtube.com/watch?v=QdDoFfkVkcw)
**Install:** `pip install anthropic`

---

**Problem 1 — First API call**
Call Anthropic API with `"Say hello"`. Print the text response.
```
Hello! How can I help you today?
```

---

**Problem 2 — Parse response**
Print only `response.content[0].text`.
```
Hello! How can I help you?
```

---

**Problem 3 — System prompt**
Add system prompt instructing bullet-point only responses. Ask for 3 benefits of testing.
```
• Catches bugs early
• Improves code quality
• Saves time in production
```

---

**Problem 4 — max_tokens**
Make a call with `max_tokens=50`. Ask for a long explanation. Observe truncation.
```
Testing is important because it helps catch bugs early...
[truncated]
```

---

**Problem 5 — Dynamic prompt function**
Write `ask(question)` that takes any string and returns Claude's answer. Call 3 times.
```
Answer 1: ...
Answer 2: ...
Answer 3: ...
```

---

**Problem 6 — Multi-turn conversation**
Send a 2-turn conversation. Print final response.
```
User: What is pytest?
Assistant: pytest is a testing framework...
User: Give me a simple example
Assistant: Here's a simple example...
```

---

**Problem 7 — JSON structured output**
Ask Claude to return JSON with `title`, `severity`, `steps_to_reproduce`. Parse and print each field.
```
Title: Login broken
Severity: high
Steps: 1. Open app 2. Click login...
```

---

**Problem 8 — Error handling**
Wrap API call in try/except. Test with invalid key. Handle `AuthenticationError`.
```
Authentication failed. Check your API key.
```

---

**Problem 9 — Observe temperature effect**
Make same creative request twice — once asking to be creative, once precise. Compare outputs. No fixed output — document what you observe.

---

**Problem 10 — QA assistant function**
Write `generate_test_cases(feature_description)` that asks Claude for 5 test cases. Print each.
```
1. Valid login with correct credentials
2. Login with wrong password
3. Login with empty fields
4. Login with SQL injection
5. Login after session timeout
```

---

**Problem 11 — Token usage**
Print `response.usage.input_tokens` and `response.usage.output_tokens` after a call.
```
Input tokens: 24
Output tokens: 87
```

---

**Problem 12 — Reusable wrapper class**
Create `ClaudeClient` with `__init__(api_key, system_prompt)` and `chat(message)`. Use for 3 questions with same context.

---

**Problem 13 — Streaming response**
Make a streaming API call. Print each chunk as it arrives.
```
Hello...
 How...
 can I help...
```

---

**Problem 14 — Summarise text**
Pass a 200-word paragraph. Ask for a 2-sentence summary. Print it.

---

**Problem 15 — QA Forge AI button**
Write `explain_topic(topic_name)` that returns a beginner-friendly explanation tuned to a QA background. This will power the "Explain this to me" button in QA Forge.

---

## T6 — Prompt Engineering

**Source:** [Anthropic prompt engineering guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) + [YouTube](https://www.youtube.com/watch?v=aOm75o2Z5-o)

---

**Problem 1 — Zero-shot prompt**
Classify bug as UI, Backend, or Performance with no examples in prompt. Test 3 descriptions.
```
"Button misaligned" → UI
"API returns 500" → Backend
"Page loads in 8 seconds" → Performance
```

---

**Problem 2 — Few-shot prompt**
Add 2 examples inside the prompt. Compare quality with problem 1.

---

**Problem 3 — System vs user prompt**
Same request — once as system prompt, once as user message. Compare output quality.

---

**Problem 4 — Forced output format**
Force Claude to always respond in exactly:
```
Category: [UI/Backend/Performance]
Severity: [low/medium/high]
Reason: [one sentence]
```

---

**Problem 5 — Chain of thought**
Add `"Think step by step"`. Ask how long to test a login feature. Compare with and without.

---

**Problem 6 — Persona prompt**
Make Claude act as a senior QA engineer with 10 years experience. Ask for AI feature testing advice.

---

**Problem 7 — Constrain length**
Prompt that strictly limits response to under 50 words. Test with a broad question.

---

**Problem 8 — Negative prompting**
Tell Claude explicitly: no bullet points, no headers, no code examples. Verify output.

---

**Problem 9 — Tone via prompt**
Without changing API settings — one prompt asks to be strictly factual, another to be creative. Compare.

---

**Problem 10 — Iterative refinement**
Start with basic prompt. Run → observe → refine. Repeat 3 times. Document each version and improvement.

---

**Problem 11 — JSON-only output**
Instruct Claude to return only valid JSON — no preamble. Parse with `json.loads()` without errors.
```json
{"category": "Backend", "severity": "high", "reason": "API returns 500 on valid input"}
```

---

**Problem 12 — Context stuffing**
Pass a 200-word bug report as context. Ask Claude to extract `title`, `severity`, `affected_module` only.

---

**Problem 13 — Test case generation prompt**
Best possible prompt for: `"As a user, I want to reset my password via email"`.
```
TC1: Valid email → reset link sent
TC2: Unregistered email → error shown
TC3: Empty field → validation error
TC4: Expired link → error shown
TC5: Already used link → error shown
```

---

**Problem 14 — Avoid hallucination**
Prompt Claude to say `"I don't know"` if unsure. Test with an obscure question.

---

**Problem 15 — Final power prompt**
Write the best possible system prompt for a QA AI assistant — generates test cases, classifies bugs, validates business logic. This becomes the system prompt for your AI test case generator project.

---

## T7 — HTML + CSS Fundamentals

**Source:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML) + [YouTube](https://www.youtube.com/watch?v=G3e-cpL7ofc)

---

**Problem 1 — Basic HTML page**
`index.html` with title, one heading, one paragraph. Open in browser.
```
QA Forge | heading visible | paragraph visible
```

---

**Problem 2 — Lists**
Unordered list of 5 topics you're learning. Ordered list of 3 career goals.

---

**Problem 3 — Links and images**
Link to GitHub that opens in a new tab. Image with proper `alt` text.

---

**Problem 4 — Form**
Form with text input, severity dropdown (low/medium/high), submit button.
```
[Title input]  [Severity dropdown]  [Submit]
```

---

**Problem 5 — Semantic HTML**
Rewrite page using `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. No divs for structure.

---

**Problem 6 — Link external CSS**
Create `style.css`. Set background color, font family, text color on body.

---

**Problem 7 — Box model**
Add `padding`, `margin`, `border` to a div. Inspect it in browser DevTools.

---

**Problem 8 — Flexbox nav**
Nav bar with 3 links using flexbox — spaced evenly, horizontally aligned.
```
[Home]          [Curriculum]          [Streak]
```

---

**Problem 9 — CSS Grid stats**
4-column stats grid — streak, topics done, phase, progress. Each has label and value.

---

**Problem 10 — Hover effects**
Buttons change background on hover, cursor becomes pointer, smooth transition.

---

**Problem 11 — CSS variables**
Define `--primary`, `--bg`, `--text`, `--muted`. Use everywhere instead of hardcoded colors.

---

**Problem 12 — Responsive design**
Media query: 4-column stats becomes 2-column under 600px.

---

**Problem 13 — Dark theme**
Dark background using CSS variables only. All colors change via one variable update.

---

**Problem 14 — Animation**
`@keyframes` animation that makes streak number pulse gently on page load.

---

**Problem 15 — Rebuild QA Forge header**
Recreate QA Forge dashboard header — logo, streak badge, nav buttons — using only HTML and CSS.

---

## T8 — JavaScript Basics

**Source:** [javascript.info](https://javascript.info/) + [YouTube](https://www.youtube.com/watch?v=Zi-Q0t4gMC8)

---

**Problem 1 — DOM selection**
Select element by id and change its text content.
```
Before: "0 day streak"
After:  "5 day streak"
```

---

**Problem 2 — Event listener**
Click event on button that toggles a checkbox's checked state.

---

**Problem 3 — Functions**
`calculateProgress(done, total)` returns a percentage string.
```
calculateProgress(5, 25) → "20%"
```

---

**Problem 4 — Arrays and loops**
Array of topic names → create `<li>` for each → append to `<ul>`.

---

**Problem 5 — Objects**
JavaScript object for a topic with `name`, `done`, `timeEstimate`. Log each property.

---

**Problem 6 — localStorage**
Save `streak` to localStorage. Reload. Read back and display.
```
// After reload: streak = 5
```

---

**Problem 7 — fetch GET**
`fetch` to `https://httpbin.org/json`. Display title field on page.
```
Wake up to WonderWidgets!
```

---

**Problem 8 — fetch POST**
`fetch` POST to `https://httpbin.org/post`. Display echoed `json` field on page.

---

**Problem 9 — async/await**
Rewrite problems 7 and 8 using `async/await` instead of `.then()`.

---

**Problem 10 — Dynamic DOM**
Build topic list from JS array. Each item has checkbox and label. Clicking checkbox strikes through text.

---

**Problem 11 — Template literals**
Build a topic card HTML string using template literals. Inject with `innerHTML`.

---

**Problem 12 — Date object**
Get today's date as `YYYY-MM-DD` string. Display on page.
```
Today: 2026-06-15
```

---

**Problem 13 — setInterval timer**
Session timer counting up every second.
```
Session: 1 seconds
Session: 2 seconds
...
```

---

**Problem 14 — JSON in localStorage**
Save array of completed topic IDs using `JSON.stringify`. Read back with `JSON.parse`. Display count.
```
Completed topics: 3
```

---

**Problem 15 — Wire up QA Forge**
Using T7 + T8 together — build a working mini curriculum screen. Topics from JS array, checkboxes toggle done state, progress count updates live. No frameworks.

---

*QA Forge Problems — Phase 1 | Generated for personal learning use*

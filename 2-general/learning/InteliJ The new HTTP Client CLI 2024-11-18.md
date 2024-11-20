---
created:
  - 2024-11-18 09:55
aliases: [InteliJ The new HTTP Client CLI 2024-11-18]
tags:
  - Programming/learning
  - "#new"
language: InteliJ
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔥 InteliJ The new HTTP Client CLI 2024-11-18 

---
## 📃Notes 
In the right side you can see the endpoints window.
Inside the project you can create a file with `http` which will trigger the new http client.

Once you have them mapped in the file you can give them names and used using `ctrl ctrl` and write the name.

Headers are added after the URL execution as if they where text in the form:
```
POST http://localhost:8080/todos
Content-Type: application/json
User-Agent: Firefox 145
```

If you are writing a POST request you can send the JSON object with an extra line after the request and then the json
```
POST http://localhost:8080/todos
Content-Type: application/json
User-Agent: Firefox 145

{
  "name": "Hello World",
  "done": false
}
```

InteliJ will know what `Content-Type` is and throw you errors depending if you write the right type or not.

To add random values you can use `$random`

To use dynamic URLS you can use a variable to pass values you want, InteliJ will ask you to create a `.env.json` file to pass on the environment files.

The http file:
```
GET {{host}}/todos
```

The env file:
```json
{
  "dev": {
    "host": "http://localhost:8080"
  }
}
```

# 📦References 
- [The new Http Client CLI by MarcoCodes](https://www.youtube.com/watch?v=mwiHAukbWjM)
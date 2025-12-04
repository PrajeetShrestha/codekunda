# 🌐 Networking Module

Networking Module is one of the core components of every applications, so to get anything done, we need to have solid networking module that is flexible, dynamic and covers many use cases. If you are into software development for sometime I am sure you have come across many implementations of the Networking modules. But today I am going to build it once again from ground up. From defining BDD Specs till completion of the Networking modules in form of a swift package. 

## 📋 Good System Design Starts with Good Requirements

> ℹ️ **Info**: Well-defined requirements are the foundation of any successful system. Clear, concise, and actionable requirements ensure that the system is built to meet its intended purpose without unnecessary complexity.

## 📝 BDD Specs

### Feature: 
- The module should support dynamic URL. Base URL could be changed with any client. 
- Each endpoint can have different authentication mechanism, access token, or cookie based authentication, or password based authentication or no authentication

### 🛠️ Narrative 1: Handling GET Requests
As a developer, I want to perform GET requests to retrieve data from the server so that I can display it in my app.

#### **Scenario 1: Performing a GET Request**
- **Given** a valid URL and query parameters,
- **When** the user performs a GET request,
- **Then** the package should send the request,
- **And** it should return a successful response with the JSON data as an array, object or error (tri state)

---

#### **Scenario 2: Performing a POST Request with JSON Body**
- **Given** a valid URL, headers, and a JSON object as the request body,
- **When** the user performs a POST request,
- **Then** the package should send the request with the provided data,
- **And** it should return a successful response with the created resource or a success boolean.

---

#### **Scenario 3: Handling PUT Request**
- **Given** a valid URL and a JSON object representing updated data,
- **When** the user performs a PUT request,
- **Then** the package should update the resource at the URL,
- **And** return a successful response with the updated data or a success boolean.

---

#### **Scenario 4: Handling DELETE Request**
- **Given** a valid URL and optional parameters,
- **When** the user performs a DELETE request,
- **Then** the package should delete the resource,
- **And** return a success response (boolean) or appropriate error message.

---

#### **Scenario 5: Error Handling for Failed HTTP Requests**
- **Given** a failed request due to network issues, server errors, or invalid inputs,
- **When** the user performs any HTTP request,
- **Then** the package should return an appropriate error message or status code,
- **And** provide an error object detailing the failure.

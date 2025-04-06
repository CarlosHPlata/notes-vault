---
created: 2025-04-02
aliases:
  - oracle1  26-10-2024
tags:
  - Programming/topic
  - "#new"
language:
---

SRV Calls (SOAP comunication protocol, it is a client that did everything, it's a generated code that has the client) is how we comunicate from GEN2 to Milenium.
Gen2 is the backend side.
Milenium.
UI has two things
- Apex (no code tool deprecated it was called Gen2 services)
- Ojet UI (is the new UI pure code it calls Gen2 and A1 at the same time)

Gen1 is a group of services that includes Millenium.

We did a clone of the services to A1 to deprecate Millenium and Gen2.

Gen1 and Milenium is worked by SARNA

Gen2 was the first iteration of Oracle managed system outside of SARNA but still depends on it

OCI (Oracle cloud infrastructure) is in charge of A1
A1 is pointing to OracleCloudDB and all Oracle cloud tools.
A1 is not on production

The target to start going to production with the new services is this month

Services on or wing
- waitlist service
- nss-ohpas (notification service)
- questionaries (will start)
- Outside eugene teams and teams we are working with
    - scheduling
    - link management
    - configuration service (it was our service but moved to another team)
    - registration (etc...)

With some services we have them duplicated in Gen2 and A1

- Scheduling create appointments, but some times the user can put an appointment in a waitlist
- waitlist service checks open spots and reschedule the appointment
- waitlist use notification service once a new slot is scheduled
- waitlist use location service which is in charge of checking by locations
- waitlist also use list service
- waitlist use link management service which manages the links that the user can see on a link, will add the special token information

waitlist have 2 pods deployed the rest api and the automation job
ERC Id is the Tenant (patient id) is propagated and we receive it.

traceability
it has opc-request-id

![[Pasted image 20250401102922.png]]
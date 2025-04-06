---
created:
  - "2025-04-04 15:10"
tags:
  - fleeting
  - new
---
# 🔷 How it work notification services
NSS-ohpas is event driven.
We consume stream (kafka) for the events

(docker compose with kafka and database)

![[Pasted image 20250404152826.png]]

The service connecting to the stream (nss-ohpas) consume all the events
- waitlist notifications (from waitlist)
- scheduling notifications (a1-sync-services)
for the localstack we will only need the kafka events
In local stack we might need to understand services

direct dependencies tp gather the information:
- gen2-link-management (generate a link) (image ready)
- a1-registration-service (get information about patient)
- a1-scheduling-service (check appointment information)
Once it gathers the appointment, it then send the nss-service (another repository)
In local setup it should check that it send a mail (not required since ohpass is the target)(do wiremock if needed)
Check if we have Wiremock image

![[Pasted image 20250404153150.png]]


> [!tip] Note
> our services generate api specification (swagger)
> then it's used to generate the controllers.

**nss-ohpas** team is owned by us.
@ankit and @jey








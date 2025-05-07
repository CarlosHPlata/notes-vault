---
created:
  - "2025-04-14 14:36"
tags:
  - fleeting
  - new
---
# 🔷 
in scheduleReason.tsx

there's a hook called PatientRequest
useSearchValueSetSchedule


There's two type of service
gen2 backend and ehr

it's a different endpoint
userSearchValueSet

constant commonContants:39

use hook useSearchValueSet like in legacyPatientTrackerHeader:36
(use id code set ID: 14229 contains all reasons)
(value is ambulatory, but we are not sure what is the value)

codeset are like contants that we are saving in DB, each value in the frontend has a code in the backend.

change the environment.

Eod1 is millenium
Dev01 is ehr

![[Pasted image 20250414144909.png]]

https://dev01.ohpa.us-ashburn-1.health.oraclecloud.com/api/registration/v1/valueset/1422/actions/search
---
created: 2024-11-15 15:22
tags:
  - Project/definition
project: pay_later_x
---

# 🚀 Project - Pay Later X 
___
## 🧾 Project Description

### 2024-11-12
- Open a slack thread to make differences with US and EU.
- this class creates and decide for aggregated InvoicePaymentMethodsCreator
- How does the Aggregated Flow works:
    - check this ticket for more information: https://klarna.atlassian.net/browse/PAMS-5795

    1. The flow is initiated from the initiate flow through
        1.1 PaymentOptionsStage > PopulatePaymentMethodOptionsStep > InvoicePaymentMethodsCreator

    2. The InvoicePaymentMethodsCreator is the one in charge of determine when is an Aggregated Payment Method
        Check the `createPaymentMethods` to see how the entire flow is parsed
        Check the `parseAggregation` method to know how to parse the aggregation
        Check the `product offering is compatible` to know how it parse it to regular invoice or not

    3. Small note, to know how a payment method is clasified as Aggregated check this:
        3.1 **The current flow:** For a payment method to be selected in US for aggregated PLX:
            It should be token or buy_and_tokenize inten
            It should have SCAL (settlement calendar active).
        3.2 **The old flow** For GB it should be enough to have token or buy_and_tokenize intent
 
**Changes for GB PLX**
    1.  Since the flow differs from US and UK we should ask how to implement both flows in the
        `InvoicePaymentMethodsCreator`
        Options are: differ the creators by market like DecisionService ones or create some sort of config.
        1.1 In what they differ: For US PLX is hidden if no settlement calendar is enabled, in UK SCAL is no needed
        1.2 For this reason exists this ticket: https://klarna.atlassian.net/browse/PEM-9862
    2. Talking about `PEM-9862` in the UK the PLX has to be offered without SCAL that means that some default values needs to be set as default and they need to be sent to the Persona Gateway
        2.1 There's an extra requirement if the user had SCAL disabled it has to just enable it.
        2.2 This should occur at the end of the flow after the user accept the purchase.
    3. The new persona gateway endpoint has to be enabled by this ticket: https://klarna.atlassian.net/browse/PEM-9863.

### 2024-11-15
- For settlement calendar In the MVP we will have a default day set for GB
    3 different scenarios:
        - Persona has SCAL
        - Persona has no SCAl
            - It will open Payment Selector.
            - It will open a calendar selector.
                - Send information of SCAL being active
                    - new user Action
                    - In the new user action send default day for market
                - Also in Purchase review add the day selected.
        - Persona has SCAL inactive.
            - In the new user action send the information that was inactive aswell

In the US we rollet oud SCAL to all. The idea is to have this level of granularity.
montly, weekly, biweekly

#### How does the InvoiceCreator works:

First it gets the information for `CreatedPaymentMethodsData` from session and product.
Then it passes to the `InvoicePaymentMethodsCreator` to the `createPaymentMethods` method
First it checks that the product offering is comaptible in method `productOfferingIsCompatible`
    - Here it checks for the settlement calendar and product configuration
        - If aggregation is NONE then is regular PL and return `true`
Next it checks that the aggregatedInvoiceRegion is on by using `aggregatedInvoiceRegionToggleConfiguration`
Then it retrieves the credit time due date days.
Then it retrieves the aggregation type
    - `NONE` is used for default pay later
    - `DYNAMIC_CREDIT_TIME` is used everywhere
    - `STATIC_CREDIT_TIME` is not used in US but everywhere is default
Then it builds the `PayLaterPaymentOptionAttributes` which has the `aggregationAttributes`
Then it passes that to the `invoicePaymentMethod` through the `attributes` property.

#### Mapping the user stories to what we have to do:
- [PEM-9864](https://klarna.atlassian.net/browse/PEM-9864) Configure steps to onboard SCAL on PLX
    - Transfer the logic for onboarding SCAL based on market
    - Given US customer follow the current flow
    - Given UK customer:
        - When the user is un-configured then configure it by default
        - When the user have disabled SCAL configure it.
- [PEM-9863](https://klarna.atlassian.net/browse/PEM-9863) Introduce PGW new Mutation to store SCAl
    - There's a new mutation for setting SCAL values on persona GW

These two task above have to be done together
This is the steps I will follow
- [PEM-9861](https://klarna.atlassian.net/browse/PEM-9862) Configure default recurrent and cadence per market
    - Make some configs to set the default values for SCAL based by market on the step created before.

### 2024-12-2
#### Wrong creation of purchase tokens
We discover that the creation of the token is wrong check this ticket [PEM-9983](https://klarna.slack.com/archives/C05863N1YTX/p1732810159938959)


---
## 📢 Project information
Created:: 2024-11-15 15:22 
Deadline:: 
Hibernating:: 
Completion date expected:: 
Completed:: 
Type:: 
Tags:: 
Platform:: 
## ✅ Tasks 
- [x] Create a configuration called `feature.invoice.aggregated.settlement.calendar.onboard=GB`
- [x] Use that configuration in the `invoicePaymentMethodsCreator` to differentiate US than GB
- [x] Map the new PGW endpoint in the PGW module task PEM-9863
- [x] Create a new Step called `OnboardSettlementCalendarStep` and make it conditional with the prev configuration.
- [x] Add new integration test for the onboarding process covering when User is not being
- [x] Create new configuration to set default values for cadence and days [PEM-9862](https://klarna.atlassian.net/browse/PEM-9862).
- [x] Send a default value of 1 on the create payment method [PEM-9862](https://klarna.atlassian.net/browse/PEM-9862).
- [ ] Fix bug creating new token [PEM-9983](https://klarna.slack.com/archives/C05863N1YTX/p1732810159938959)
- [ ] Investigate and create the new bug 



## 📦 Resources 
- [Figma](https://www.figma.com/design/v3x33qFmmMXGmLNIwSGJmO/S%26OD-feature-explorations?node-id=1549-66526&node-type=canvas&t=wWcQAaHdwYbMSki2-0)
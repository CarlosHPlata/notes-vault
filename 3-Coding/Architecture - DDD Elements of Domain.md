---
created:
  - 2025-05-12 16:00
aliases: []
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 DDD Elements of Domain 12-05-2025

---
## Entity
An entity is a representation of a business object that can be defined by itself (id), and has behavior that can be acted upon.

```
car {
    id: number
    drive: () => {}
}
```

## Value Objects
A value object is a set of properties that can only be differentiated by their properties alone and have no behavior. **they should be inmutable**

```
wheel {
    brand: string
    revolutions: string
    pattern: string
}
```

## Aggregates
Big systems have many number of entitles and value objects, and they tend to relate between, when this happens we called a compilation of them a *aggregate*.

For example taking previous examples, a car entity have wheels so it could become an aggregate.

```
carAggregate {
    car: car
    wheels: wheels[]
}
```

### Aggregate root
When aggregates communicate they tend to do it by only relate to one of the entities of the aggregate, this entity is then named **Aggregate Root**.

For example using previous examples, how a user purchase a car and set, it has to communicate to one entity, the car. Then the car entity is the aggregate root.

# 📦 References

---
-  [[Architecture - DDD What is Domain Driven Design]]
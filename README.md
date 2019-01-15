# ShareCostCalculator

![sample](documentation/images/demo.png)

## Getting Started

1. Install [Docker](https://docs.docker.com) ([mac](https://docs.docker.com/docker-for-mac/install/))
1. Run `docker-compose up` _(...grab some coffee...)_
2. Navigate to [http://localhost:8080](http://localhost:8080)

### Documentation

- Access Swagger at [http://localhost:8081/swagger](http://localhost:8081/swagger)

## Beware

- When adding purchased items to friends, you must click the "check" icon to save your changes. Otherwise the calculation will be incorrect.

## Known Bugs

- When deleting items, then adding a new purchased item, all the original items get added to the array.
  - to fix this I would implement chained @Output() variables on the nested components to bubble up the delete event

## Todos

- [ ] Add unit tests  
- [ ] Change the ChangeDetectionStrategy to OnPush for the components that only rely on @Input() variables  
- [ ] Change the "check" icon color when table row fields have been dirtied  

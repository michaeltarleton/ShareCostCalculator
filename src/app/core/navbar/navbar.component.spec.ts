import { LayoutModule } from '@angular/cdk/layout'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { NavbarComponent } from './navbar.component'

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should compile', () => {
    expect(component).toBeTruthy()
  })
})

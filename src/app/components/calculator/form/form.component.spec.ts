import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CalculatorService } from "../calculator.service";
import { FormComponent } from "./form.component";

fdescribe('Calculadora', () => {
  let fixture: ComponentFixture<FormComponent>
  let component: FormComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [FormComponent],
    providers: [
        CalculatorService
    ]
}).compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  })

  it('sumar', () =>{
    component.inputNumber = '2';
    component.inputPrevAccumulated = 3;
    component.changeValue(1);
    expect(component.accumulated).toBe(5);
  })

  it('restar', () =>{
    component.inputNumber = '2';
    component.inputPrevAccumulated = 3;
    component.changeValue(2);
    expect(component.accumulated).toBe(1);
  })

  it('multiplicar', () =>{
    component.inputNumber = '2';
    component.inputPrevAccumulated = 3;
    component.changeValue(3);
    expect(component.accumulated).toBe(6);
  })

  it('dividir', () =>{
    component.inputNumber = '2';
    component.inputPrevAccumulated = 4;
    component.changeValue(4);
    expect(component.accumulated).toBe(2);
  })

  it('limpiar campos', () =>{
    component.accumulated = 2;
    component.changeValue(5);
    expect(component.accumulated).toBe(0);
  })
})

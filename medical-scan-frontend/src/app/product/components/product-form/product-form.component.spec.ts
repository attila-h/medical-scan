import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let snackBar: MatSnackBar;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormComponent ],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatSnackBar, useValue: { open: () => {} } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit event when form is submitted with valid data', () => {
    spyOn(component.submit, 'emit');
    component.productForm.setValue({ name: 'Test Product', description: 'Test Description', price: 10 });
    component.onSubmit();
    expect(component.submit.emit).toHaveBeenCalledWith({ name: 'Test Product', description: 'Test Description', price: 10 });
  });

  it('should mark all form controls as touched when onSubmit is called', () => {
    component.productForm.get('name')?.setValue('');
    component.productForm.get('description')?.setValue('');
    component.productForm.get('price')?.setValue('');
    component.onSubmit();
    expect(component.productForm.get('name')?.touched).toBeTruthy();
    expect(component.productForm.get('description')?.touched).toBeTruthy();
    expect(component.productForm.get('price')?.touched).toBeTruthy();
  });

  it('should not emit submit event when form is submitted with invalid data', () => {
    spyOn(component.submit, 'emit');
    component.onSubmit();
    expect(component.submit.emit).not.toHaveBeenCalled();
  });

  it('should display error messages when form controls are touched and invalid', () => {
    const productNameInput = fixture.nativeElement.querySelector('#product-name-input');
    const productDescriptionInput = fixture.nativeElement.querySelector('#product-description-input');
    const productPriceInput = fixture.nativeElement.querySelector('#product-price-input');

    // Initially, error messages should not be displayed
    expect(fixture.nativeElement.querySelector('#product-name-input-error')).toBeNull();
    expect(fixture.nativeElement.querySelector('#product-description-input-error')).toBeNull();
    expect(fixture.nativeElement.querySelector('#product-price-input-error')).toBeNull();

    // Simulate user interaction to touch form controls
    productNameInput.dispatchEvent(new Event('focus'));
    productNameInput.dispatchEvent(new Event('blur'));
    productDescriptionInput.dispatchEvent(new Event('focus'));
    productDescriptionInput.dispatchEvent(new Event('blur'));
    productPriceInput.dispatchEvent(new Event('focus'));
    productPriceInput.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    // Error messages should be displayed for all form controls
    expect(fixture.nativeElement.querySelector('#product-name-input-error').innerText).toContain('Name is required.');
    expect(fixture.nativeElement.querySelector('#product-description-input-error').innerText).toContain('Description is required.');
    expect(fixture.nativeElement.querySelector('#product-price-input-error').innerText).toContain('Price is required.');
  });
});
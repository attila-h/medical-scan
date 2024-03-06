import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ProductI } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  private formBuilder = inject(FormBuilder);

  @Input() product: ProductI | undefined = undefined;
  @Output() submit = new EventEmitter<Partial<ProductI>>

  productForm: FormGroup = this.formBuilder.group({
    name: [this.product?.name, Validators.required],
    description: [this.product?.description, Validators.required],
    price: [this.product?.price, [Validators.required, Validators.min(0)]]
  });;

  onSubmit() {
    this.productForm.markAllAsTouched()
    if (this.productForm.valid) {
      this.submit.emit(this.productForm.value)
    }
  }

}

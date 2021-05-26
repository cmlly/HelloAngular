import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfigService} from '../../services/config.service';
import {NzMessageService} from 'ng-zorro-antd';
import { NzUploadChangeParam } from 'ng-zorro-antd';

@Component({
  selector: 'app-flash-news',
  templateUrl: './flash-news.component.html',
  styleUrls: ['./flash-news.component.less']
})
export class FlashNewsComponent implements OnInit {
  validateForm!: FormGroup;
  config: any;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private configService: ConfigService, private msg: NzMessageService) { }

  ngOnInit(): void {
    this.getConfig();
    this.validateForm = this.fb.group({
      category: [null, [Validators.required]],
      language: [null, [Validators.required]],
      title: [null, [Validators.required]],
      synopsis: ['简介', [Validators.required]],
      pic: [null]
    });
  }

  getConfig(): void {
    this.configService.getConfig()
      .subscribe(res => {
        this.config = [
          {key: res.english.name, val: res.english.val},
          {key: res.simplified_chinese.name, val: res.simplified_chinese.val},
          {key: res.traditional_chinese.name, val: res.traditional_chinese.val}
        ];
      });
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }




}

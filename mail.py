#!/usr/bin/env python
# coding=utf-8

import os
import subprocess 
import traceback

def send_mail(recevier, tital, content_path): 
    """
    recevier: 收件人，集合列表，元组
    tital:邮件主题
    content_path: 邮件内容存放路径
    """
    try:
        print recevier, tital, content_path
        for one in recevier:
            print one
            cmd = "mail -s '{}' {} < {}".format(tital, one, content_path)
            subprocess.Popen(cmd, shell=True) 

    except:
        print '{}'.format(traceback.format_exc())

recevier = set() 
recevier.add('1171403023@qq.com')
recevier.add('746733042@qq.com')
recevier.add('574228760@qq.com')
tital = 'My Test Mail'
content_path = '/root/mail.py' 

send_mail(recevier, tital, content_path)


import os
import time

demoPackageName = 'com.DefaultName.DefaultName'
demoPackageActivity = 'com.unity3d.player.UnityPlayerActivity'

class Device:
    def __init__(self, ROOT_DIR, serial_num=''):
        self.serial_num = serial_num
        self.screenshot_path = os.path.join('C:\image', 'screenshot_pic')
        self.tempFilePath = os.path.join(ROOT_DIR, 'asset', 'temp_test.py')
        self.adbPath = os.path.join(ROOT_DIR,'asset','ADB','adb.exe')
        self.demoPath = os.path.join(ROOT_DIR, 'asset', 'demo.apk')

    # 是否安装了指定包名的应用
    def isInstalled(self):
        res = os.popen(f"{self.adbPath} shell pm path {demoPackageName}").read()
        if res is not '':
            return True
        else:
            return False

    # 打开应用
    def openAPP(self,packageName = demoPackageName,activity = demoPackageActivity):
        res = os.popen(f"{self.adbPath} shell am start -n {packageName}/{activity} ").read()
        return res


    # 安装Demo
    def installDemo(self):
        res = os.popen(f"{self.adbPath} install -g {self.demoPath}").read()
        return res

    def getIP(self):
        try:
            res = os.popen(f"{self.adbPath} -s {self.serial_num} shell ifconfig").read()
            ip = res.split('wlan0')[1].split('inet addr:')[1].split(' ')[0]
            return ip
        except:
            res = os.popen(f'{self.adbPath} -s {self.serial_num} shell netcfg').read()
            ip = res.split('wlan0')[1].split('UP')[1].split('/')[0].split()[0]
            return ip

    def GetDevices(self):
        devices = os.popen(f"{self.adbPath} devices").read()
        devices = devices.split('\n')
        devicesList = []
        for i in range(1, len(devices)):
            if devices[i] != '':
                devices_dir = {}
                device_number = devices[i].replace('device', "").split('\t')[0]
                device_name = os.popen(f'{self.adbPath} -s ' + device_number + ' shell getprop ro.product.model ').read()
                device_name = device_name.replace("\n", "")
                devices_dir['name'] = device_name
                devices_dir['sn'] = device_number
                devicesList.append(devices_dir)
        return devicesList

from tkinter import messagebox
if __name__ == "__main__":
    phone = Device(r'C:\Users\admin\Documents\GitHub\UAutoIDE\miniperf')
    while not len(phone.GetDevices()) == 1:
        time.sleep(2)
        print('wait1')
    while not phone.isInstalled():
        phone.installDemo()
        time.sleep(2)
        print('wait2......')
    phone.openAPP()
    # try:
    #     res = os.popen(
    #         r'D:\frontProject\UAutoIDE\miniperf\asset\ADB\adb.exe shell pm path com.DefaultName.DefaultName').read()
    # except:
    #     res = False
    # print('res',res)


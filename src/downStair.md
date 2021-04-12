downStair

1. 取出downStair数据集, 分别取出x轴数据以及y轴数据;得到downStair_y以及downStair_x
2. 处理downStair_y数据每18帧一个片段得到一个片段列表downStair_y10;
3. for item in downStair_y10:
      [maxValue,minValue] = getMaxAndMin(item)
      if(2=<minValue<=8):
        if(12<=maxValue<=18):
          continue
        else:
          return false
      else:
        return false
4. for item in downStair_x:
      if(-4<item<8):
        continue
      else:
        return false
5. return true

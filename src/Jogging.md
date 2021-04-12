jogging的规则运动

1. 取出jogging数据集,取出jogging的z轴数据Jogging_z,取出jogging的y轴数据jogging_y;
2. 处理jogging_y数据每10帧一个片段得到一个片段列表jogging_y10;
3. 处理jogging_z数据每10帧一个片段得到一个片段列表jogging_z10;
4.for item in jogging_y10:
  [maxValue,minValue] = getMaxAndMin(item)
  if(15<=maxValue<=20):
    if(-12<=minValue<=-5):
      continue
    else:
      return false
  else:
    return false
5. for item in jogging_z10:
    maxValue = max(item);
    if(-13<maxValue<-7):
      continue
    else:
      return false
    if(-1<=average(item)<=7):
      continue
    else:
      return false
6. return true

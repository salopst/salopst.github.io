---
title: Oatmeal-Raisin Cookies Recipe
date: 2022-02-08T07:33:14+0000
author: yearluk
origin: scratch
draft: true
categories:
- Food
- recipies
tags:
- cookies
---

# Oatmeal-Raisin Cookies Recipe

Been making a lot of these recently. I don't know why. I also don't know whence I got the recipe... found it scribbled on a page in an old notebook. Perhaps I am making them *because* recipe was found in an old notebook. How much wisdom is to be found in old notebooks, and why do I not have more old notebooks?

{{< image src="/uploads/2020-02-08-ingredients.jpg" alt="ingredients" position="center" style="border-radius: 50px;" >}}

The measurements are funky are are not rounded too well, which means they were probably taken from an original US recipe and converted to metric equivalents?

## Ingredients

**Wet**

- 115g butter
- 125g brown sugar
- 1/2 tsp vanilla extract
- 1 egg

**Dry**

- 95g sifted plain flour
- 120 best oats you can afford
- 120 raisins (or sultanas, whatever)
- 120 chopped nuts
- 1/2 tsp cinnamon
- 1/2 tsp salt
- 1/2 tsp baking soda

## Method

- Cream the sugar and butter, later adding remaining wet ingredients
- Mix in the combined dry ingredients
- Flatten golf-ball sized spheres
- Bake ca. **12** mins at gas mark 4 (**117 °C | 350 °F**reedoms)
- But bake time depends on whether you are a soft and chewy or a hard and crusty kind of person. Hey... ¿Por qué no los dos?

## Bit o' snake-in-the cake

I'm not going to be weighing ingredients like that. Far too lazy. In all likelihood I will have just internalized the rough ratio of wet: dry and  just wing it.

But it might be nice to know, for example, what masses of other ingredients do we need if we base the above recipe on (in the below case) 150g of flour?

Well,

```text
❯  python3 proportional-change.py

========ch-ch-ch-chaaanges!=========

Initial values: [95, 115, 120, 120, 100, 0.5, 0.5, 0.5, 0.5]
New values: ['150.00', '181.58', '189.47', '189.47', '157.89', '0.79', '0.79', '0.79', '0.79']
```

And how do we get that?

```python
# 2022-02-07T15:54:21+0000
# change all values in initial array based on a new value @ index
# in second array
# useful for scaling cooking recipies when u only have x of ingred y

def propChange (a1, a2):
  """
  a1 == Initial array of values; 
  a2 == Array new value of original value AND index of new value
  """
  newValueIndex = a2[0]
  newValue      = a2[1]
  oldValue = a1[newValueIndex]
  returnValues = []
  multiplier = newValue/oldValue
  for i in a1:
    j=i*multiplier
    j=(format(j, '.2f'))
    returnValues.append(j)    
  return returnValues

initValues = [95, 115, 120, 120, 100, 0.5, 0.5, 0.5, 0.5] 
newVal   = [0,150]
newValues = propChange(initValues, newVal)

print("\n========ch-ch-ch-chaaanges!=========\n")
# `f` kicks off string interpolation. Woo-hoo!
print(f"Initial values: {initValues}" )
print(f"New values: {newValues}" )

```

## Results

! YUMMY !

{{< image src="/uploads/2020-02-08-final-cookies.jpg" alt="2020-02-08-final-cookies" position="center" style="border-radius: 50px;" >}}

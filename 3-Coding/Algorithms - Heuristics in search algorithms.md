---
excalidraw-plugin: parsed
excalidraw-open-md: true
created:
  - 2025-06-23 12:50
aliases:
  - Heuristics in search algorithms 23-06-2025
tags:
  - Programming/topic
language:
  - algorithms
  - ai
---



**Topics:** [[Algorithms]], [[Artificial Intelligence & Machine Learning]]

# 📃 Heuristics in search algorithms 23-06-2025

---
In [[Ai - Informed vs Uninformed Search problems|Informed Search algorithms]] the heuristic function is defined as a function $h(N)$ which returns a value $d$ indicating the **proximity** of the node $N$ to the **goal**.

## Example
Take for example a maze where every tile is a node, that is connected to any other available tile, turning this maze into a [[Data Structures - Graphs|Directed Graph]]. The goal of the algorithms is go from the **start** node to the **goal** node.

![[Pasted image 20250623130555.png]]

Think about a moment in how you would move to the goal in the maze, think when you find yourself into a predicament of where to move next, how would we determine what is the best path to follow?

![[Pasted image 20250623131133.png]]

If we have the knowledge of where the **goal** resides in the grid we could decide to move always to the tile that is **closest to the goal**, this idea of deciding which is closest, is the *heuristic function*.

Taking again the Maze example, for the *heuristic function* for a maze, you could use the **Euclidean distance between 2 points formula**.
$$d = \sqrt{ (X_{2} - X_{1})^{2} + (Y_{2} - Y_{1})^{2}}$$
Or maybe the **Manhattan Distance formula.**
$$d(x,y) = \sum_{i=1}^{n} |X_{i} - Y_{i}|$$
It does not matter as long as you **have a way to known the best decision to make**.

## Diagram
![[Algorithms - Heuristics in search algorithms | 500]]


# 🔗 Relevant Notes

---
- [[Ai - Search problems]]
- [[Ai - Informed vs Uninformed Search problems]]
- [[Algorithms - Greedy Best First Search]]
- [[Algorithms - A star]]
# 📦 References

---

- [Heuristic Functions in AI](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/)
- [Euclidean distance - Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)
- [Manhattan Distance - Datacamp](https://www.datacamp.com/tutorial/manhattan-distance)


# Excalidraw Data

## Text Elements
Start ^w8r2CojR

Goal ^XWTAcBYY

Start Maze ^1KxuGsHt

Predicament ^hTWqJxnZ

Goal ^eKr9wJHb

Start ^YYClfmno

? ^F3d4QBno

? ^LFnrNaWf

%%
## Drawing
```compressed-json
N4KAkARALgngDgUwgLgAQQQDwMYEMA2AlgCYBOuA7hADTgQBuCpAzoQPYB2KqATLZMzYBXUtiRoIACyhQ4zZAHoFAc0JRJQgEYA6bGwC2CgF7N6hbEcK4OCtptbErHALRY8RMpWdx8Q1TdIEfARcZgRmBShcZQUebQBGOIAWGjoghH0EDihmbgBtcDBQMBKIEm4IADkAGQBpAFYABkIOAEcAKQBNGFI2VWx2gDFNbAArVJLIWEQKwOwojmVgidLM

bmckgA4AZm1tgE5GgDYeev5SmHWkpO3zyAoSdW54+KTtRo/Pr8/4u6kEQjKaTcfZHbQAdiS9W2jR44PiB024LOhUg1iW4lQjT+zCgvQA1ggAMJsfBsUgVADE8QQNJpK0gmlw2Hxyl6Qg4xBJZIpEjx1mYcFwgWyDIgADNCPh8ABlWDLCTYXrMZjOSS4KDYSRi3EEhAAdUe2rQjW0KMmEF1bEJcpgCvQgg8YvZQI44VyJr+bCF2DUlzQ8Q+fzZwjg

AEliB7UHkALp/cXkTIR7gcITSv4tYhYCq4RrO4Sct0qlNp/A4hAIYjcOHbJHxI7g7GohhMVicZ77fZ/RgsdgcSqcMTVxr7cE8JI8I5HDPMAAi6Sgle44oIYT+mgLxAAosFMtko7G/kI4MQNUuA8jjuCjpsbklr38iBx8SX082ySzz6gV/gwoUAL7nMUpTlIqAAaACK9BGKMACyjSSK0+r4LORyYEI7QABIAKpHLkfzTJiEBzAsGJimsaDONsDZ7I

cJzmhcVw3HsY5HPUCL1EcnbbJCfwPMQTwBq87zfKJjS/M2kgAkCUAgmCkLQrC8KIsifzovaTYWlahLcuSVJ0rSSDrsyrLspyum8ug/IcIKwpZLJ8ZSrK8pEUqbAqmqGpajqeLWgaRrcKaDECL5NouRUjrlH8LqSEWUaaaU3rMn6zxBs2IbHhGB5xs2Ca4EmVZoKmb4Wpm2YSLg8T5hyxBxa+ZbNmEX7xIpRwfJx07Nj2bZcGgPDUd2rZ9gOHBDmg

1E8IkkKvDO87BIuhXfquCDrpuO4ZPZ2VHieZ6LfEl4Njed4Pu+LQvkVpaPmwn6LT+f4lIBhTAZAoHoNg1TtEcUCwVsCCYZs9TtJIABK8SwTKnT1NhYqEbMCDzOpRnNhRqDOKccQHMcpx/P6qPXLs8SbEc2ynA2t6gl2zb8YJqAvG8YmiRJFpSYCwJoKCEJQjCcIIvsSLBRAiOBTioXEqSekSNShn0sZLIZeZ4uWdA5A2UKIoOblTm2vaEBuR56qa

tqIt6oaAnGliZrG352tEZFVbRcIrrusLzZJb6sCpQlkAZeGkb5DlFp5QV9UZpy5XoLgPDVYWzsXSVpRNYtMItUk9adRa3V9tWByDb2nAjWNtObJsPCduJPB8M2hBzguX53StzYbjV617jk/vbaeC3PAd163ts97p6UT7nagxUNRaH6Erdy0AUBVeLRAABaHDgq0mgAPKwbB+w8HAW6ELU2xdAAagQ+ow/AREkULfwo84CJgpj9E40xuz1PUmyjo2

2z1EkhycXxAKQl6YMy+EzUoLMZJyU5opHmKkBZC09I1UWFl9LSyRhaJkcszJckVhUaytl1ZiklNKG2FQ9aqgNt5K2hJTY0yCjQhAZCJB22qk7YsSCLRuxSgGNKFofZZXbrlRMCBkxx3HiBMOKNBbbGjrVWOo9LqNQrHtCuyJ6inFhLnHq1YToZyGvnQcmIWqNnBGYpIJxZq12nr+BumC1q7k2kIi0x5O7NR7kdfueih5nRDu+a6U9lwzwenPUqC8

jgwGPviWcpBVCaBlAAQVnMfaowNYIQVqAAIWcNUC+MwJDX0WMsW+6x+raE/ljAWuMNjXHePsbY9YeA7B3lsAW1NzZ0xEqAj44DICQLZqgDmClubKT5qpZsiCsSMNQZLAyMtG4mXlrgnkVJcCaE0EcbAeZHKkPCoqZUlCvJG2QSbIBFsBbaSYXsh0pIorNhinVThiUfQ8Npnw0oAi/ZoEPMI/KojFpj1DlmaRuAUgOxqo8xR8cBAqOeGxKE9Qd6D0

gJndsfVwSbG0cNIx3d6mNhLlOKx8067LVWs3Rx+5nGlFcbtbuTRDp9wHo+Xx4iro3SCbY2eT154VGBrOcEwMbKwQSUSWcCT9QAH1ZxJEGDAQgp9sB5KvvDUixTkYgjiIGPFVSmJvAsR/V48RQTjkmm0s5nTuk/D+P02S7N5JcyUrzfmakimYi9paFBeDZnoLFFg0ym4ZnoEpGsjZWziFa2ubrA5nlDY+VOWbQKlsTnW0jaw8F7D4peheR7Xh7rPl

bV+cHVlVcpE5nqHIyFgLlHNQRI2E4k5K76Lzr1VADSBaov7DigMt5EXF1hI2kCNdiU2LXI3BxG1KXfIDtSnaXcLz0t7sdZFEBh5+IngEklnKQncrCRUTYmEK7KAACqkDAsehAgwhBbkwPQeo1RQxKrhgjV15FhzggSCOHiOrKLXDeHCfYWwAb7WGUkQBCbgFdO6b0/4rNbWDPtbA0ZzqJkvqeSFPUgaIBSwMr6xZODMPBvWZs7Zmtdl2lctGqhxy

tKizoebBhyawrkYirc+29zHaxQUe67hOa3l5vZL7AtgcRFiKhRIl6paKpHArQoqtWlYVoFvPtTYRqJxYrRa2wm6nO2jWMQ0vmTQiUIDnUtWxZLOQtycVOjutL51Xk8fecEzLnxrqHhukdCAuUlGemUBeYYjDxFqFueIx8jhwCOEeyojQhCEHiM4Cg2xmDUdKLDApKqb7qvGmUrVX6X4/tqWxSaKl7y1lBGBmmFrLXiWtdJAZQyHVwLGQg1DUzGNi

xWd6nDst/U1QI5oHg4oeDrPDWRnWFCY3ULa3RxNFzRbMJuU6dNnGOGta4dm3GgZ+OhkEdZwt/zXMSeBTmcEMmVtyYTgp2mbVOK3kmqBrqBiW0/2XR2guxibj92hO/TFVch3Gc3aO+x5KJ1t2+aiIo4OpiX3wVgDWkwQILzAvqI9CTsCZM6J0CA4P/yomnZAGlJn9oLoc2Y5zI9zuQEngDzz27vM8okEjlHaOMePr5LD1940P7aFLvUgGjR8UfB+x

aapSRGibAhOCADxd2LmI0eV82zEjhGtHAZ5pt57vM1q3B7GKGyJoY9Rhr1Qa5kYNKH6pZfWBtDc0CN5yzH9nuUObGxh02TRJpo3qeblpWNsOW1GaDPGNvvO9gJnb0Y8cShEwCpRpVJMR02KdqMFPLSXdFzvU4n8helA7albTb24VtWvOJd11c5r/Y8+Z7cFLQfh5s4TjxjLSenRc8W9d7K0D1wIuziQABxNgBBnSUCPd39AfeB/xk4FAGUhAjCYh

4O68Uk/Bj5SlLjAWi5MBQASUQZQLbdb2SYGKHsUBzAEG34CPf+gSDEDVRaPQ2RcAtCYKJiA/nAvBdC+FyL0XYvxcS8lyAckQEFoAgYfTfCoMffAMUXAIQKANgYGcIGfTEPEIQOxHxN0TCLXZ4bneoLzCHXdRUfUCCJILcI9HvMMHgZgJIfAIwfeUYUYYgGABJAABVZ3QEKTIhKR/R2G0COFF2fmbGqU+zNH1RU1TmNTUypnNWEiq2q0kiwLtRgRG

SdXGQtEmXdUuQIxN1w2wQDSN2VgFDVnslty93GyozjT8ld3OUYS9zTXYz8D9xdjW2Sl4022DFDy+Vrz21E2TzKhBX2ETwOxTy/BVxOBJgrm02rAAQe2bXz3ZiJnn1YiMxM07zHWB1biExnTcT2gb2Oic2b3Jxjzc3b1M3ujAEejpwIPQGqCMAoDgJ4H1CJDdEXiMGUCIPaHFEwHFCgCPTYOInSxfS4NRmonfT4MqTy2GKhG0H2CNX6jhGvCV02GO

Hl2eBkKq2gxtWgWGUdXgRdT11WwTk9Q62Nx9W6wt30MI1DRI0DgjXtzekoyOQsNoTOQYw9xTTuO90W3sIzScOeRcKDy20yk8J+WEz+R8KKMO3DkFgSUCNbwuy/CnHvHrBmKzxRUe2rAAzzy7Su1HBhH5wxWSOp0r0s0nS8JcVnXcWJ0b3yInhZTEzZUCQ72CXKNCQRwqFqGYEXnBAlVIGYNwG2GBnaGIB73oAgiJHxCSAglIL6I4Nv1WFKQ0V4P4

J12F3WGEPBBJkOEbD5kSESDNXA1pjWMtQ2IUPgyUJ2Kaz2I0mmQuO0LOPwwuJDWIxMMjTMMeJdxePd0OM91TR9yW0hW43W09ncO22BIjyDn2zhMhJBUyVhPpOrUWlF1/lFxuFRJbGbQxJpOz0eziNpmRHhE7DLkJIrzSIs2r0yPxwpJyKpLyLJyCKpw8zwJ81eggHaAoFaEGE2EyU0FGAlQQCOHxCPVgnFLYFXmYKjgImhzS2fU4My1RgfiVPGME

LVIsQ/Xfg/gRTpkpgtHaVWJAWNJq1gy2IayQ1UNKHUJtOOKwztIWV0N630IISMNFB2TtzGweOdym09Nmx9I+LsItAeS4yzX+ODPSg8IrMjzBOj2hTKDj0FiJDjOT0Tm4HvEnF/n53dRz3Gm2FuBiJ6lzL/hamlyJmLI5UBzN3HQyKpUrOyLpXs2pLrKjJXXc1IppxZJ3TZIkC3BXDAjDFnHoEqEXnoHXnwFqHwHqA4ABiPSEGcBlIGNnItDvnHAS

GVO/UmLBGJlHGuAzyRCaQ11KF3Ig1kJNKPMUO2Ma2QzUJaw0KOIlhOK61vJ6wVivMfLsmfNI1fIo0dwmwAIN0sK/JsN9K+P/I4wDKAvdgBJDKBPAojPBOgr8JzFnAQohOCL2kLNeHzL0rRIzKwsyvTLwuxNmI/jF0aF/hIqZLM1LKrxB3AoJ0pLotrIKPrOYvKrKIqPwI4vQDFMXk6AlWIGwCEBlFGGUDgGqCPSPTWQoGcGPmhknPyXYLkrlMgBR

hmPKURVy2XMoi8XeESAOE4kIsRKzPuGkP3Kg0PKgVMpPJUOa32OssNyvOw0Mh0McuWVsqwydLDRfNMPfMmzeOeINNeO9PeJ1j/NKAApW0DOAtzUisEyoogqLXjNjyOwqi3CSugqQsUzHA1J/g/kiPGjHCxN02QrFwnB6RLz+xSNJUqpJJrxBKyNszzJrK8UOpXTpOTwbJYqbPp3QEySMFgkkBgCgGUGwhoPiASSgGcHqHxCgGICSH1ApFmuVRnMW

ogBRnnzBABm1QmKolXIJWOG4g1K4jYhWMMvWLOrqwQ2UN2N12tLay0NOIcvOOcpVkIWMM+tdO+p8suSsIBvQyBttj9O+McP10DxAv4TAthpiqgvExgqRojkGFRujvRsGQ6nqRvBe3RLxtyte2xIA3HFeHQrKtKLQMZAoqszJLpvr0ZscwYoRuKMZKLs5qqIgH0HFClslyFs2C3ASQ3nqEGGUABh4H0BlFkqVtNyWu4HCNWs1o2smPfSNR0sSAA2o

mwuNsNJOtAWMvOrNLMtPOuptt+va1eoevmUwTwz0KdsMNcrh1KBIQ8vIQ9qeP8n+q9N9qY2BoDuCocNCtdiDKhtAtDOiqjyCPioqh7wTvLGajQonBeEDFxtQFTmg2zsJqEn6ihA1OIt+zLwpoqqBzLOqthtqurPqqZprrZuaobtp3apegXkqEIHBEIGBm2FaDWVglaFgkwHXkXmqH6uYMwGHoVqfVVTHpVquB4PYk4hVMYkonHHFxrFLnQp1MmmX

QMrXsgw3rNrg3q0QyuqtLdUvKPpvNPrvKctepcqITdo+LdI/IPu9pft8rfv9qCtBpCsAp/shr42hrD1psgEjuAdgtwEwnAYTI7C4nqXnwwabR0T6lKtwuxWQdQC4jTksUwesRYuJPLIIarNooZQatpJb1rsp3Ifrkbo6ogH1DDFgnwCgCMBgFnHvXxB7yMA4Fgg4GYP0AeAnObFS3mtHo52GJonEYENVOka2CVMRRJqnCWMRVXsqwPPkJMu3suqt

sspuv0aVmPuEfNwdIvtVivpdMsYfo9Ofu/L9pYyccgDBszTcfCtDo+XDt21BPht8P8bDCCfk2aj5n7kDFLizozt4BmIJsLkDFeArkRWSdKnJqJKpoyYeYrrqpyZIcasYvZpatYraubIXhgAHCEDYHiHaCmswEwhgHxEwhlGYHwGqHiGqGPhHqEb6bRkVMGckcgGqRke0ChFBHrFrB2BHGgxUdmdOvma3q0ctstOtr0dtttPtqMeeoI3euuJvtuLf

K8vMKOfoTscuVsI/uca/tcecJub/rDoAYjqAcYpAYjnaDefhMWnnwsWRBeBxtiY01LnbRzIKvYkmZLgsULtSNwaqsotheovpqJ2IerqRYKaYpKOKcoYxdmEkEkH0DAnqGwGwgSQglglIGPnwEwEqG2EkEqGYFYIEenLpaGPvmojNBaiGakdRjZZ2ArgbB3oHSOoNIFfUaFfNvNPMrPLRCsrWbQXsplcdtMedqfOvp8aVc8v1ndM/OOYCt/O1YuZc

fBrCteTcP/qipNcgr8djsFlqCtZhUgdTnrXYjTMwtbQaUBcxDQf2CaEMxSeHTSehfwcDYgEIeycXURbycKOgpRYobYsqNKbgAgjYB702FwGqEyWwEGFIAFMaA4FEHFEwglX0FpYywUtKXpireZYgFZb/j2ERK+z/mOGODTP5aNMFc1wWZFYtIsvPL7clfusMbNzPvvPuvlf2eVenescBr+vVZOYcbObuU/p+ODt/o8Y3Zhtfd8bNf8dyXBRjjO2S

qTsSC2D/lOD5jgewpwsibicLhU0mlvGRDTNL1SdRfSZffLqDcrtDab2/aaqjeZPRa5pVs6AoC3G2DYAlUyXaAlWcAlXFHBGcGBgSWPgyHXjQ8GLnJWr5huB7dw8w/2AhAOEDGI+uxuBmYo/bao+FYtto/i4vMY4MelZY+MZeqVjMddvcq+pVZnZsf8ray1fOeImXauf1bXeDwgHzS3aeeSvNcFlggPZSueGhAsTogJKdaey4ive4CaE/nURhB9cp

r9eppqqybswRbDfs+RaKac9ZOoYqHXmwlIGBgoCRGcGaewnqGPmcHoE2EGFnHqE0FaEi/kvlL6mOGmL7ni7w6S/fnmPT3UXi/I/XoZk3s7Z3p0fFd+NfsPvWeY8ZFY5MYq9Hb2Ysa46dx+t46fv4/nffua8uZh4gBDsNbueNek9NYjf69wEqCG6Tt/nHEbcJUm4nvxsm9zJTi2HUVgYffLyfZW5has7ffW4Zts+ZtXR28c63QA6od8wqEXigAgkG

G2HxGBigEGGcCEGYEGHlWBnxBaHwEx2LZ6dLbnMnti/WuGdrfw53l/hhA3PfheGbYgBB7UbB40ePO0eWfo9WaK/h5K8R7K8w0q7cpuNGyncx89towa4Pqa+E51dE4OMAPE/XaNc3Yp+3dk93dwAi4U/kSU7Rsu1BFCcJnBezOyvgZHBm4DAaTakRJ54hawahYF8s+8eF5oo28/a2/QJ/ejr/ejZl9jYkHiFwEXkwBgHaGYMXkGFGCJBlGBmwASSa

dwHFCHGN/6N6bLa2F2GvAkdUvviaHKXnrHEXpuGJmUeOrd7EnB80by+7b3olYPrtsHdK9lcdKIw+uq/dtq549h9sYE6uQLsCerXIniTwk5p8pOQvGTlT38ZFt7CinJPMp0uyExxIt7XuOnQr4NJEGbreJnzEaCi4jUvEXntgzIol10iZdNvu+074k5xerNZKv3z27sUDuEgJogiHXhEhJA+wIQMQBPCaAwIPAWcKMEGCVBiAygV7srTvgjEIQbEa

tiy3WAtR4gCQW3qgyJg3B+0mXUHtfw94XUveYrFZvvWx7P9Hq9pc+iO0vrmMv+BzH/ljz/4x9secfNjCJyDpJ9ieKfTrt1wz69c4q/jCCHT0uwlxJwrwPghgKiatp7w1fVAMXDYg/xRwJnSFiWRb4BsheVA0Xptzs498HO9dAfs5ybrxIZai8MCJkh4DAwealYLcGGEqDKAe8EEToJ0wtDdMN+pvDDtI0VK79ZBCXSiAoJEhK5Yh/OepP3A0FX9G

Y2gxZroLo69tfeT/KVi/0D5v8dmLtUPoq3D731rBUfeNLj0a6BV4+S7XViu2uYddASkAtvtAOebZ9gYfg5qMvWvCTQtELPTnBhRwFAt+cKcRoP3Gd6mdH25nZ9kkMoEi8Q2aQ2gfkzIZS9Wq+3OXiwhlDig4sG4NQFAH14ygj0RwMMMZlwBwAZqXTKcib3Q7vd5yFbNoTh2qRdCeIxcAinwR3jfxBhRlEYTR3v66MiemhaYcYIdrbMj6HHdHhH28

qP1/+ePRxtsJa67C2ufxA1uALJ7p8oBlPU4VCVwD8N4B+fRAYXw+bKZkQ1wEIVnHGjFwIhJMRsC61yofC+eXwxIRQIjwpD/hXfdIZTjoG/tdu0vHIaU0qCdAEAYEReOSGUBgQJUowbCBBH1AUBwQW4fUI0AlSXB1+spYRopT/QyCCR8g9iNMQRCvC/4adAGJSNNodtb+XbXenSP1wMimOAfCAFs1MHrM2RlgjHpyLVb0YNWc2LYY4IT7OCIawo1P

qKKOHhkJRfXfxr0Tz6VokBX4NocBi0x3DW0n8CIfPlrBO8YmjfMzkXQs4/DjRfw3Il+wyGS8shjAwDswPQBgRqg+IPgRKgoAUEwwmwQgEkGST4A0c5IKgMGIWqhiQQigjUnF334tQ4gTSG7MTFJgYpiYSYuZjlwh5LM9BPvAwbDyMEn1X+w7FHuYKq5h876DubjjYPsY48yxAAhwb7m/rtdXC7g+5uKMz4wDs+6Iz+ggKCJJ06+P8RIBET7EThXW

sRbEu/HwFNB+4y6PUSQOLq5jS6pJX4R31SFmjARvfBktThKYriV0xATANsBaZbghgi8Kfipn0CNBOgR6ReLVHEEXiPu8kfuJbxrYH84gI4VOscCRIqYyOl/KkSmM96itxhgsBjlMOzEzDcxSPcrqsg/4KsJ2ywiCZHy5F2DYe8E/0nqyFEHDPGYZeMM2O8HZ8aW7Y2TJ2KTivDIQY4UceX1CEThtyEUvTnPkSAjgP48IMmk3wSHkVyBTE6cSxNNE

0DSG9A60aCKYHgj0ARIUYPqEXj1BRgzBBJI031DJtMkmSUYI0CgDtBtgcAWSX00nrXilJcgzoYqRQrlwPgqcZUblVd66SPxqYyHt7wmG/joJ/4zZhZLlbWTOOHI1VrOw2Gx9KxCEtycn3cb1iQ85PNCV4OjrU9z4AUgvonWQFThiRD8VURpgsS3SdMQLKcOOHfhsQ4hKU/nmlLwZTi688LNiblKtEgi0WYIlsj3lnCaBlA/FHYL2XBBiAjAMoCCO

CH4kUBEqZ4zfnOQ2A8EuYepLWtCF4LUQ+CRHOiA/DfGUcIEppGkemOh6ZibK/vMyXmLY5mDdmFgsCTV0glrC/Kc7TYUAL5GE8xOu0lCQdOOE+Tjp/jMCBcL2goDFJI4X5hX1OA6cYphieJoRJUxi4AYuo+IZ9LIHfSjRv0ohgCIBl998pwMwqS2UwCkBsImwReEkGwACQLE2EG4MMG2CVAwwYEVDmjKaE4iqINEbGZGMoi/wRIO8UEPCEJidhd+p

M7LuTOo538qZ+gx/oYMZEATZhQE/BKjxZlLDwJ9xVYY5K5kbSeZVYnYYn1rEeTJOXjJsehMlEgojesojsQqMlli556p7OBvIwiHIhiYxcA4BrI+kGivp/rXWc2BNGzju+FooEXlKBncSip0AHJDKB4AIdqCW4ZghQFGCaB8QpAcUJsEqAtN2pZbdGOy2hA4yZ6EtXYAENHCBhsKouF1hHPd56SdBBkgrsZITmmSmRQ7FkcBOZmgSM5bMhyaWJmw8

ihOBc/kUXNXbITDhZc7yRXJbHZ9F4Es54OE0RSFkHhcs29hEPVyExJomnYgc317mrdMmWU3IjeHHCGzOJjZGNi5zO76AiQmEZgKQBlCkANEhAeoOvH2BiUjgOLcWR7OxHj1OhFbX2fvwDlGoJG/UQ4AcDelXytBN80YXfIf70jaZA7Z+YBNflWSriy0lYezJznrT7Bm01yXsKQkRVS5Xk7wlHSBRSjcAMCgMHMQaSpxbhunDTNhWwFkT4mnEdcnz

homaye52svuRlL1kfscp4bYEYuJtEgyF4rIcEIvFGDOBBgz4cEPoGBhJA02R6eIJgCRA24OFUXZobW12C3sGkfs1GAHLHB4CVMAGFOOFJbYVYsu188afpPy7SKaZd1YrvTIWkPk05H82yZnKjTZyf5buOCVosDqIT3JICzyYAwgW+SpRKSmuYFLrmwLHeU4D4A9InqXt2eBVBtE0FHD3sxxnwicd8P7nkk8FVdc0SzVHmAyAlBU5cZPMaDtB4gfg

bYEIEwDVBKg+ASQKQC3DYBrgCAegHAFjKpK3uXCwZKpIsSGTqk78D9C9NvbsRXgKmZmqNOTGVLb51SjMS4KzH1L5FycxRXyGaWLDWlX8ksWtNgl/yWEi7QBTWOAV6KIBYCwxTuylGKozp8oi6V+HnwcQdg14rTjeAiEIh9o+0epMsUwWpSPFOC19oPL2XsTMhXE0hU3WwgwBsA9QZQLOHxCWyjA+IDgO00wjAx9gUtTCGwG3lzlEi7wf5T93WABy

ZiSubCjpTYgkypCrbcpeIphWSK4V1MhFbIs6zIrzJQfd/sovZGqLv5OK3+dzPx68yQB/MusYLLFHCzhlos7PgApwS1zaVi0ADDLg0RESbFT2Nnomo57iQUuMQ5KeON9bYLBezE4NkPP2US8I2DAwJabIXjrxmCsEXeHPzYBJBRgR6YGLgH2DMFxQnQMQO0EICar0lJMXYPgJvB6r/Z9QbnMXAxTxrQQ1wPmBfwtWaDhhEiymVDzjkyK6ldMp1QzO

R6pyQJGKiUJOw9XYr6uuczRfnK2k6L+lJKhsWSseaRkMJUo4RpGomXRrViILfnBXGd7ntRcZ7R4e9kbCcQ/4jYJbjgxzWt9Mp+awVUQv8TjzRVpTeoJ0AgjKBNA6q4GJ0FaCEBCAmSSoJoB7z7AE2RwABQ0JDH0tt+EIV4QfKt7MQVMjbcIr/C4jJr9KOk6FVHNy5piF1P4+OX+MTnzSXV7HJae6vsl7rse3In1byIjX+qXBYAvaV11Qkhqjpxik

FOKDMWRCRwGpBECXC04N9FZj0zEJxFBABDFu3KrWQxPSk01gNNnA2X4rHnHKTZpylsmhsGDHxF4MACVKmyoIygjg4qGABQGhDAxXmXyiQWqRojfwSNNbZiL+l1JEwjOH8KdWUpnXfAb+VS2kXatup+Q5pT1FOZLELGszv+aizpdYUE3/zj1gonaYGtAUGLL1sVMNVKLEHUrcJl2HtfUElzsREFoQrxIOKAx1buY/60gQZp1leKB5M4qkm9M65Fr/

FIqwfi50yQSpYI9AA8ZhEyQ954g+IBJO0FGCYRnA2EZwESDPRdqvZu8gLTksVwwhrgyo6jZOGB50b3xDGz8WMPvmTDH5SKpOc6rmFMyFh47bdXZKzlZavVXSvFQtj9UCjQBbg4rUMuk0lps+PlO9edIgZ7RawE4GHXMvGh/xBxV4Q1P1HelZrlugGn6b1t2Vi8wNbeCzRPJbL7B6AgpCCD3j7IJIj0s4KgswFaJHij0w1LbT8vLbyRiNe23YKcDM

SctP4KuEqmItnXWr51U0oyTdrY1Pz7ta6yyWis3Uvbb6WK1afuo0XOSelTgvpYVpLmkqStN9EWTJpzCdqqtjFFTpOGwr9Rawr6v5rWAekc8xut7ZTB1volNxutRm7xdQPopmajlI220TxKJB8wEARgHgKhuICjAtw4IFcJIArjihtgmAGEj5rknW9ucrO1ShOAhD9QlcrwhIjcO0nTqhhMW6kTHOY3TTWNs09jSltRVWR0VMundbxvl38anJ0Ely

b0u2muCBZgOnrlesrk5hxg+uiNobshClwbwETdTRPSRCai0FfBRnnbsnHbK4W+s/6W7qNkQbRtTdSQPEDAhQj9AuACCKQCEA8B14rQSQIMC3Drwkgx6eOjHr6YrVJc/axPRjBWWIpYQgPKECNLO1ky+kFMvPULsK4mS7tHGx7QWO41FiVpdXGvQeqV1HrtFBWpvUVsGWt6ytOuiqC+C72IVkBI4OYkozh3wMcOSDIFnzCaQ9oE1g6buZssNE9adl

IGnHXPuIUc1INPE2cBwASTbBl8mSfYJhH2CtB8AEtJIK0GcDOB9Ai8FGmfqGJq0IQ2mgdRgbNA8RdKpiMcBOEhXP7I5r+6OUxo/0PzRd3+kvfmKUXOkeN72z1QrtxW5b8VwAv7QGvV3nrNdPjbXSDqlFQFEDQU1KEIpeAyy4GE4D9Q4sLgkw5uhMruWjoA28rc1xmv6b4u27FrjZBOheAgHYi0h6gpAfQB6Lza4AEA68HgGwE6BsBMAGqgQ2bwrj

CGr9ExJPfWAsTacmgGpDSXzpz1zr3934gvUuqS3F6TBjMt+c9pUVV6gDtgkA3XuV3VjVdkB0w/tODXlzgdiNKUe7PGUQ7gmvCYvnb0nDOG+CEQj+BohKojhUdGy7NX4aA3O7WJQR+cSEYX2e7J5gwaoMwU0BhgwwpAdeLUDXiZJ9QPALoEei3AJHZEmR9JZjLfgYpAtPU2mKnDqSzKDgP8JpPtEi0dJLV/Oi7RNK/GGTP9t2ldeLsaXzCx2zRnQ3

xraOK6OjYBhvSerV0DL9FQOtvZAqlFcBbDkymvgBnxFm7MB/OCITcGhCS4FiE+rZSQen0+LXdwR4bSQsX2lNsAMoWoF2XxD1Byh9AbCIMEaCYReyFAawIvCECM6RGm1AZm8ZyX50IQ+0VOBzpLh9pneUK87QocY2TSqjwumaYiuhM/7UtZe6XQifaUfa9D3qvOb6uE3GHRNAO6A54NxMjKQUGR0YzSsh3VgkSJE3sYmonrXAIhRS79RnjpPEGndW

Osg6ZpZPmaPdQSioG2v0CDB9gygfQKQE6Cqrj4mEWoOKFQIUAe8zBIwFKcUqMs5TqlBU8IvQbPjbwOwMo2Alz1KHdTkJ1Q4afUMNGN178rdbLsy26HgDKJzVp0cLlEr9hWJjXTidgNWGQUbUwkw+tzTQglcd+rTuEMWXKzJwKmBpNqNDMY6p91nQI8ye2OsmqD7JniTKH0CzgiQJQxgBQHxBph4YmAfQM4FX4a8iz8gitnVoM5lnRc4hwMGFrDkz

F1TchipaCbi2xyWNNRnSHUeZEaG0t/+jLVYItO9n9D1poTflv+3N7HTh050+VpBQvdpznpgMHwRQFcxZZTWxMcucLiTQ6Yt4NiJmpWPo61jmO0gyZrNFpkhtMZtk3sZbKDAkgivLcNPlgjMEtwwMaoPQE0DVBRgQgMMJ0EGDnCnj22+mKWYmK8xpiFMYvKCFeEkwn9WesaUBdhXxbF1tS2o2LqNOl6DCHZivW9vNM9nkTiFw9TaZQsmGRzZhsc0Y

onM5h5a7p6rZAzhDRC1BWnUiymoKrKjCJE4d4W4qINbmGTO5mfSThYuWj59+O6g5PPiDKB+SQgcpuGGBiYBrAlQY+BBDaakBWgcm2Sz8pi6GdRDSlk4DDtxLCKys5qqLdnrrMVGGzEJlQ0XqMutn110Ft1QAd3XV7rLVp2y8hfAOoWoD2JmAy5aGMgp8IHlg3cgM/b0oyTkU/qKysDANhqTNF/UeFfovbn2+kZ5i7jrrqxmy1e6ZgPqFbowBF4pA

DgD3kn7MEwwu+TJHACJBhhAmxV6U7wE+47xCY5Vg4EfxKpBXkQ1EDLnVaBPRbGrAuyoy1ZF1tW1D9RzqyabMtmmrGUEr2rXv7NomVdjesTUGsbHgLBjkibPi9vB0enxjtMccBy0lySE/TaAEiaysWK3tJwmJPTe4q62eLwzjF3c8dFiuHL4rR1qzQvHaDYR1415/UAklRHKBmAHAReFd3XhsB9Q2wTQD5Tw3niOp2Rr6wCueC/W4uLSEjgz0z31X

tLWpy7VIvhWJbwL7VuG5LoRtNHtDllpE9BIE1IW8tw1hy2er6O43yVWfKUZKdwuk3VO8+IRdMeIll8sq+VZWV9l/gcRvDtF3w6zb5XJC+ttnbmxxPA0JWjzk85gMcEyT0AwIzgUYAkkpbVBJAzgfEOGDgD9UEDGIuao0M4XvWXj5Sf4zkpR0iF+4JcQZnVuiI7kALVqnSzar0ugWDL5t2G5BbbNpb6gxATYOKCKs9WWjv/B22jYrEY2ujWNh02Na

dPjnJrOYegPJteBIoSqKO5lczSwPGJ4QAMYuHdk3PbWmJ4OZ6ClkxHQB2cdwUpmd1IA8ASQowc4djlxwbHspjeZO8KvYtxmJAL9t+2wA/t9EN8L2u+I/uHWqzz7N2AaDPThB6p6wCIWsKxHYgKzSl5sA1crkOiYOGwRqEYThybMw2WzltuVuPcnvT3YLxYvq/PfaPo27LLt2mMStubu2L1Wu0NXAYjiniZr3ey7NpRwMqa+xLwCIWTGxrKjL7cd/

wz/YLX/2FxWCqYCPggByhhQRNofCo7UekAZdk+afLPmHAT5sgy+K/PgDXxd5N85+XfOQgPzuWm0J+dwFY8vzX5la9+KIE/lIAv5M7RwbO7nfzuF3i7pdsMOXaECV2uEpAYAhwFAJaOogOj6ArAXgKIEDHaAFAvRKfB/RTSig04GEYqCwRsIUqaLEkAQDYRj4FAdeMVD+jirNgbp+offfw1lspBqp94x0N4C1gEg+KLARFuJiyGtL9Go22Cau01L7

Vy6uRTCc42siYLn87s/bdRuMPF7zD9ExAexst717E1gm1KLWC+33mi0FZRiiRCHBnDvOsi5iElyp1iYG1uiZPsiu7WmLMVg64U12NAP0AAYo8d2UyQyhWgrQbIJ0EaBMGiQSSOps+ZaFxAmnTdtpz/HhAIP4Q12f87081MwZtT4J67fqYdV2VV1sJiZ91doeAG57szvs/M6GuLORrvRiTULIGOYWeHgsIMfw6QN0qjUYuTna4cin4DWVkIfAf3HT

zSOHdbNtbtjrSEKOdjadjiwvC7JugjxzgTCNUGlqVAEAMAZwD3kaAVDmAvgt63fAXKgvVK/Ud9LFzvZbBxIU4aKdg73INWrUTVnU1DZRcjPHVYz3/Zoc/7YverrRhh/i5/ILPMbGJno45Y4fmG4aFL1yxVELNbPrWHYSdR/CWLoHrg9isO/pyN2ThH9XLxiezcZMu6ub9zyNkK6ecQB6CiWP+PgAP3VAeAzgLcEIFaDghhqYYBzUC7j0kx3zExLV

3vOI3Byxin8WFwbb6cIvjbtq/S8M8MvD2X5UF62/CdtvI2OZfHGy6AbdfL2PXyz9C1Jr9eb2JAmgD4PJrq1CKFrzh1OIOKik8sRH6yza6sZkfrGIztzv+2m5LUnLZeLZXkjAC3CVA5UhAdoEYE6DKB4gpAI9JoAggUBnrg3VV5eN4Kn3RD9b/EpM30ypxoQtZ01xDeavIvC9Bp0Z8ZYHemWbbM9xE/Q7xfjvUTk7wc90Zndr2MLG99Z9IiXdVQg3

h7PaBolG4fB8DodtUfAwm4BXlZJwMQgBiZt7vLn9JpN1FaZOpuKDqdvm5e4Xg94JaygBABBB5rVA4AwMIwJHsaBgRmAW4RoIMG3u/v5J/7765q54jc4NK9SX87qQg89J6z5rmD2Bbh7weOrVtpD0O5Q9220P0fOZ668Jfuulnq90c+NYpVEfYQO9vgrtXpfOGVMgZqEC1EOC+mCDPhzrdy/jt5qT3PH6M+7sAfHWJAbnFVcfA4AwBqgOAY+ESH1D

MB6gEEIwMDE17sKq7itT2T8snqEONbfUCtp/ARATgxiKJLYPp7kJQejPQzs26Z+tcIfR7g7tHtZ5HfqKMPTDxz1O+c9oW8Pc7gj9GQqBLvHjNLuw0JAM77Q4QjW2j03OOfIUliAMJXCF5ehhWD3EX2R8e85teIBXB51Fjk+H61B0IPeZgJhBe0NDIHBGjFEf1Tii5OdTi/flz22oSH/0v6OrZl0UE6ekU6VCxE4YkUkPWrcHzr+Z8WlYupncFqy8

68G8EvnbRL12+w9Jf9G8b87wj9N8JhefM8GpP9aI6wd5VYpE9YmJG52DR393dFw9wxeTebGg5KAs98bIsdwZVHsTqAKgFgi4ADH0UTR+AQkDaPufvP/n7lD0dIFDHEv4xyvjMezd2fTjioMEG6JH4mADjs/Dvj3xwEpzzYNx4/jdCeO1ngBCJ/4GidC/0AIvnn3z+EYwE4CCBVgMk9QCpPnMGThZlk9wKJWWykgI9PqA6CYApbEDx+xjK2CKCDgp

9k3QQqyUTERFewVQfN0J/A2u7Fq9SgguhCgr+c/n8H21/7bQ+KHrqrQ318OafactTtww79qAXDm3bmPj26VuN8x0oSmgI1DvbP5tQ/4u7wfX1ENdk+lZ2B6HcmRKVlA9vdPg70e45vRXU6BKVn0DPZ8VBmCgQRwHgFbiD4KAYBDn/P8rCn5l/RjqfFL4+47+THq+BX101hxK+JAKvl7cflPz4Az/Vkb0GKH18ePJvxPU3yAXwBr+5/C/rfy0sFgJ

OHfe/53y300nJ/EwJ3fHAgu90AfUGYJ14RoAoBj4YgGPg+8ToCgBMAZQEaBgYUnVaB6gaBRU88YJYj2B1yV4GohT2AcRnpDtBIAHoGkIznXN9SNt3hdNiXSxAtqjQew680XG12NNLPXrwddZ7FGzs8XXU5nL9bTSv10UMfDwXw96/frib9o9ObyJN4GMmCUhdNam14AEddbwvBvmVOiIE2PJR3p8drAVXsxb2KKWgxWLOL0PNhXCoCOBmCTCAsR8

QCfjYBZwI9GPgoAUYDEsOAXeEIBq5Wp2rt6nDGSBsCAx3jP4SA7v1xgVRI/gzx8BYRS1dNLOgJf0O3AZxNsEtXPzYCuveG04D05TFWmdbPdYWR8HPVHyc9iXL1xr9OHCw24d/XdACb9PlGQJnNaYBpE1JsOZuQH0aPXvzik4QJoEZtljWn1jtR/Bny49qBAwNLgjAuK0oNzvL3wXgJUVJBn4zAZgFgh2gcEHgAe8A4x4A+JVtSrc0YfDmxp2IAIM

JgW3PI1XJOwCpCVx+9efHfgmvWLUYD89PU1g9UXa8hzEJdYPnL0kbYv0tMvtAwx+0hAocxEDSeb12ct3PPH3gpSPYbjQAmPYaTU1GgltCaRu/Y+w7AK4LSRHALnbQK6DdAxO0Og+ggFl488dfjyH50ADhnBBRgMCEqhYIYGH0AkgWoGYIj0TCF/AeAQYEwAlbOpxVsy2NBz8CNg4gK2Cd4HYPUpllUP1H1u/DUxiCGAvuyYCLgkz2S18/OEy4D4f

Ohydd0PAawndhvbDxXsxvVz1Wcfgxd3iBUZSoLwtaYRFF71KfLTiDsGPJ4XmJf4EowTdDNXlz2suIBnlRDYvXm3i9+bdkkhgw9ToG2Ap7YgGYJ9eS2QoB9AI8XxBlPYr0EZa7RSlNAAYfwOZDi4FpDZC6kNWkOBiqG8Fqtk/aIPkNYg4C3ODSHKHySCYfAv3tdxQnF14Csg6UMw9ZQwlRw8XPJyzc8vbIj3iB+DdUNJtYwu7Cn8+xGt3EcM8OEBN

QTQx3TNDbnFEIGCebIYP/YzAiQGwhiAWcHwAe8TJBgB58WCGqBmAaoFghxQBJF4tmCeICpU/QktgDCQQIdVeBrgLb1btHDNMmCCpiAsiGlTVfnGhBSfHkMTC+QwXUbNIfK4I2YMwrjTh90ghHxmc+A7IIEDXg+y3tMFQ0sKVDywvH1P1qw7Z24AmPTRCnB0DYgNZcbgI3T5w2wnl1wVzQrsOn8M3BL3QB7jCUmqAYCJICEB9ABJEXhWALfVPh8QX

iyrcbhZSi3DOIHcO/MdgodX/hIQY3TQFTUE4MM8kXHPz94zPEUMxdC/bgNQ9JQ18PzChvXIJG98g6vzECJvCQNgom/MBn+CVOcINNQxwRa1o9qIJl3J98LdPGICGgof0IN9vRNw7DAjRCLRDDrW0IE8KgfQE314kMYMkBxQGUHwFmCaoHElgYUgHwAd9KtxJgwQTcNaRKfFTDEcyAqYlPDeWUcBVNaA0GxNcDPM1xYjTbRIOuCGlcZ3WZ+sQbGGx

h3R4IQt+IlH0EDPw4uQKDRI8l2f9JA+IFetAI4Nz6hEgbnXrBHWJQP4JWVU4BahFNWsFgjIvG+0hxoAe+0e8n7HiQQBagUgH2AKALCBtwv7SYACMJ/S0O7CU7dEKMjMQjAA6iuonqKD9wCIYmogw/fuD/g6tEqm28NI4IJUx2Wf6w+wXWeSMBNkKXYB6EVcM+0RAAzbPwii2IvPxHsUgykDijrcB4I6US/H2gLDBIuUJWwA8EsK+Cyw69QrDvNAq

LI9u4ERWjCDnPsSVwVrEcAbB2odoPY8wzXSMGjDApCO0DHvXvH7wbDe5EF8OfSAmIRJfJ33nwD/OX3McT/Sxy18bHbIEPxc4DXxv9iYiQCvxiAG/GEZH/Q3xfxTI0gHMii7KyJsi7I9AMcjnIr0Ff8ond/xUdMYtSD/8knZAiADXfUAK3oPfCAJXRJAToHixRwIQCvNpKGYn1BNgegEGAJUQYHLRcAzGVNBrsJkNNUwwiYmTJ8ZImCaAZDLiBXoQ

bY10Nskws4OUNobNMKij0XGKPbNkPbiJs9eIvMOeCy/D8JYcMokSMk1so8SN3Ym/S1mkjU8LSX2gLdLTi5V9Q69m+x+CHb00iwve3R0j4IzsKGiEYsaJc5mAfYDDB7NDgCOAiQ3AHoBtgHqjDBNAToGYJCAUgBI8VwrETSUvZXwINiiAo2NICreU2NQoEFOtE7Aog4KLtjLwyG2M8WA4UKuiLPS4i4jswx11xc+I32MGsXoosPlDRrRUPEDlQsoM

Cx5NZBz5gB6BSNsVTohOOHBioqEFT06ow73H8fFfSOtDew7IUzdnAZglYMtwezR7xOgMnUqB1VUYGPhhBNgCOB5ORuJrtm4pnXHAkuNuM2Cww53jXxakKEDmJ7wAimNQmIsKMGdzor/XIcJ42H2ninwiULnifY0v0Xi0ogOLYdPgwoJ9cThPEwrD/47CTlFPLRaCWIHWfJRW8D4o+0/VhwHiD5hOWOEJ5UdA65z0DkQ7OIMiHnZCLtCJAYgHBBA9

FolaBr0XmiMBxQfQHBAIIVbS3BiAACM8CSvNcO4UDokqkNjAgyBNm5akPoQbBsKdPFhA9ok2noC39aD1YjUE9iPQSmlU00SiHop4LwSZQpeL5kvw1eJ/D14v8JVCf3P6IBDlA/41rBrFTv37FSfSEIvBJ1LGmo9U4mO3C8M4/lSRDrwa+P3M2LUwMzdmAcEB7xxweCHFB14PKxgA2gIwDDB/OZgB7xKtABO8DnjSaDXJtElkMIUZ6O3hEJf4fmBJ

EVRRBJa9wohIIuj0wjiMaMrPT2P69stJ6IEiCEtH3cSSXLKOx8coiSPiBaeSOK/Ba+XexbkGw28FZUwtfOmU1z4sf0Z9spZJJHkRowyLSSUIqoDgAhAfdFggtwIwFnADgccFC43Q9eGIBNAXDVpD0ZdJQAxykADA8jKIsXBNjmIJbx2AwiV4HYh2k3uyvCLXS4Ktcek2xIfDME17TaVBkx6PLEcg0ZLyD0fYhMmTPbb6Lx9c+PxPp5JmExOZ5yo6

JPCTUAaF1Dl+4rZO6CbnPSP4Sb4vj1zim6UYCMBsIQ4FX4kjWCAoBOiLcAlRBKfsnxA5kipLpCtVEcA+TyIzyN3Dfk3YBiFUHQ4H7j6PWjThdeQixNa8UEqExsT+3br1SCf/Ls2fDMgzmX4DBOFFKEi0UkUU+jfwrFJVC4BKhKjUNQvUnfhj2TQJCSYdNZMzw4QLSUpTEQvlySTaUlJJMDhg9OxbJoOJJValMIDgCSBcAVoGUBIOaoB5JNAbYEIA

pIwVNeScRDw1FSvkzkOgwoEuIFDdAwf7j6CQU/p2TDHYy117c0EjVJSCQ+cy3hSko/qwXiXEo1NejRvDxLNSvEi1M3iVXXFOQEpcUcAbBvWYOyjcVIouCnB34GYj7StArhIRCeExJItD4YgRPTcMQlzk3gb/QtxlBsISnVnBgYNKyMBqgMLGUAKAaQNUT/QoBLrs9XdlimZ24wIImICLGMVUwXgL9BKozw7uxBNC0h2OvCnY28IR4HtDgMrT7o+C

1rTnE56IbTl46dw+iSE74O8TN4mS07Sa0JSFaRlI2xRZdVAzULxISqImFcUtIkf3iSE7L1JnT+gnOKOThE9AGwhmAGUBgAUcWCGPgwwTWMwgIIFkDkSYAfUHxB92XWN8C9XWpONiZ6a9PT9wQjFBKoXgUxNUYh45VM6Tu3dr3Hjy0izx/SHEv9KR8Uo5FP9ixkwONEDg4qZNDjG/eIBlFrU+9Q1CZDfoJOBwIzdyQz9UQrDMQoY+EKwyovGlNnS6

U0aIIzjI4fjAh2gY+H0B0cMCHXh9QcEEyRTI8EE6AhAQYGYBxQK1LvsvAoVKqT8ONjIvS6kq9K+Mwpecw5ZBcAeNtj23YeMsTVU5s3VSFFRDyniswrBJzDR3GCTkz3wz4gr93g09WUyyXVTI3jcxeIDbFoMnZ0JhawLUWItFIqEFZV+48uE7kPUqdJwy9kg5QOTBEhdLFVidfvHqBJATJHqAwwf0UNAEkNgFqAZQTYGYBnkkLOTSmdBkIizwE7YM

4yvjP43HVvmcSEa8bYsxKVTFDFVK6TrEy6Iky7g+xKL9HE5KLrTAMhTNRTxkzKJUzMU9vRVCsJHVhwlZrOlWux0HRQJCThxVlVhAbkrRJp9oYiK049qUuGLwy50890s17M9ACGoTzIkH0AK3YGECykgMCEe55PfQHXgoAfySTTSvOu3nwvuPjI2zwwrbKDDvrDFFLg27FlUOzBM5LOEzkEs7LVSLszLM1TssmyThS5db2P1S3ww1MezjU57KDiKs

t7PIS8fQnK0yxjICPVEPgepC2B94p7BrMkMwgRI4sBcHPMzTQzOKszYcmzMOT/U/sPQBgnKVHm04AcEEgh6gVoBvRMACJU6BgYfABwCic9ROTptqKXAojOQn5Kpz2WCxESAuIZUyfEC0+2P5CUwm8MhSXY9gJMspMm7JkypQ+7JGThcxtOEjysrHwlyXTPH1Ok6s1KDvA7wAYWIkiHNXOHS1aFONoltc9sN1yYcq0N9SbQuzPGj8QIwE0AUkZpmc

BPHaQASRMARzNIAWmDgBodgstROPTVaQMHdz00ryO9yreMYnxkXpQIR7Tg8lLNOzRMyKLvDek92P6SZ4ngPyzHbfBKTzgMptImTXsuvyqym/IrxlySbOXPgZHMRKRDse/FtBCs2sxm1L5888dP01J0qHN4TvU6zJrzb4pcURyIAYGCPROgBJDDBVeQgHoAZQccmYJpqQYGIBQnQgBGND01cMHyJ6ScBHztwjNOizTQDTjoSG0BYkSyjsi8JZz4gx

fO6TI85IMkz7g6TMR948gDMTzist4OLDvwltLEij8+IA8Cvs6hJ+ybWHpCfEJoZw2mYi8tiG/VYxLrLfzp03rOMDa8o3MzceAZQEc1WgbCARlMkYgHqAEkBJAQB8QfEARBJAJ6xWDT0ko3YzO4mtg1IkuYgJiF4QPZ28j4wweOZyTskTIHse3IezLTOc66PS118niJwSBcwrKFy6C9KKITTUsDK+j3szeOdzT8mhInoxcFEhTjz2eaLazU9QXBBC

YkjoLiSdchJJ6yfU/ZIAc68lzm2Bj4cEGmCKdI4EZxNgdI2YJZC3FlzAVg3wP0LIsjjKt50GZS2W8AUtWQ1I58wgq7d7CsTIgtLsuxMRtKCl8NwThk1KJ3y3EpTPRSD8rh3xspvFUNMV5k1KkNVtODSOiLRwVlXfVjoAHN28MMzoIsyBoq+PSK+szIqkLjknvAoAIkbCFkAj0TJAoAFCjki3B0vHvFqAJUTZxdykCkZiS5qiinN0S0AYwvadhFUX

F+MlMVotsLWc4gvOyoU7otFC0g3nIyD+csdy8LABLD13yU8sYvFzD8iDOqyxlUIs4LYFGYgRBEiZrLulOuElJQEOVZB3Qy04q51EK0iz/IyLFHBlNKZZ5ZwPqBmCSoH1BMAMMCsB4gYGCBAYAXAFKc7HfvKPTvlOuwZD3i0MM2y6itp3DdTdAhUxg8CpnPMSgSogo6Kl8z9NuDMwnnJ1TsE3MM8KE8oYp8LCEqv1Tza/CYpx8pizeOXDMSgR2ag+

CHYERRkHZw1qikMxuyWI6vEQthjdi6kv2LaSrIqbp7jMCCyT8QMkFCVqgfUHaBNgWoGBgSndXhUSBSxAqFLFKLJ3t4ailt1ypcYeopbCjUftSJgPDQEsRdgS5UpILl86FM4icsqEt1SYSgrN1L5M/UsUy/C8TQxTUSttOqzbTb7KtLFoQrCwExcZXP2iIQlhMUxeWdB1Y9QvWJPTiUi7DIQi9iiQu/zS1QjIgBWgSPQQBNgQkHiBBgfEH1AhAYUw

0Ke8fAFwAIsKt3eSkk0fIlSZ6Inw+SDA/7i5ZDCo13wLALF9NDzi0iFNLSMslFUQ8Y8gZJrTZMqsqKyQaZPJNT6y8YuKDJihvwrDb1TcBtS/bLV0qt8Bbsppt4uElIDtS4A4AAwySkcopL3S3oMnLBg+lJ9LSmVoHiB9QfUE6AugZgkqlxQfUBgBsIIkDKTCAOWMoTYypuPjLhwN4oDy0CsfL3DuAeorFxEpeKTTV/vRnLbZbykPLBTR4hwtYDSC

+8JLKNSyvXcLtS2Eq/LvCn8sRK/ynGyKDfXaZLDj4gPvJ2FWy2lz2gbwIjisVnDSXEqj/ckuGCSNi8ko490Kpn0wqew7CsOLZy7ACoVsILcFKTcAWcFnAxgowCFBGgfEGqBguLSqajls4nJRhU0w8tYqYGCYlPLlIdBT7gQWXMs7d+7ZgNErxM5wsnjXC3LNnjZKyspoK9SxSpGK6ylStITLDBd03jyky0t0rgIvaiilB/c9g9ZNRX4x/gYI5my2

tuEykonLPSqcvsq+wzN1IBHkwPW3AiQrcH0AOATCHc44AOAB4Bv4sJ3orAExiu4JTQVODoSKciYgBSRCM+zJE86BEASq4g9ouSrOii22LK+ksUMyqN8gbzhL69J7NGL/ChspNL1K9TLB0wK7TNJtjODhPAjXhOY35xNcwlOHKki0corzUijqv1yv87qrvjjk10VaJYsAMWcBVAcSBnCjAJICJBOgfAF18EChit80ZTFB2WqxSoIO4A1qonHqRMHS

O32VzwwSvny7C/apVKbgjF2OrISzUryzzq+SvhLCwgqsNLkStPMbKgi6rL11s8gMDq1gvJXGJ8lA/uEYSNNVnjwNi8N0sryPS4GppLBXQbNKZgYMCE6BBsIkGwAjgTK2YIJULcBgAYAWqGUBj4MCBjKocYKtdzVgpLiWr9snGs+LIhCtgmhJwBuRS5Ws/iuBNyjDpPzLKawstVKaa1fJOqyyrUs3yF7asvyqRNa6v/KUSu6rUyKwzvV5qFNV7z2c

YKsIVIlo3OKR1JJmUK02LkigGvHKs4zqqwrbMhyt/zk2TQH0BlAcEEbzyABJE2B2gIQDAhj4dUEyRlAILJNqB8+atxFdgS2uTLWQmeltKvuNS1jUuIefG5Cn0t2tBSR4qxPZywStKowTSy+mqyrA6+z2/KCVVmo+CbqgCrUqo6vHxmrtKjgrbLUoJb1MzzKm/KH0B0poJG4LYvgldKWq7SLHLLMqvOGiDinquOShAO40wBoA/UEyQhAIkG2Bd9Z6

02AhATJDfdUYtGrmqMa2tlNAUSK2o7jKcq3l7qEUCcFMLGkYesVSCCxUr2rBQseK6Lp6noo9i3Cr2I8K5K3KuDrl60OsKqVnVtK5qm/YBvYLwK8/NBBWg7iFFqT6lYokNBpYGOfyWbV/Osrdk2yv6z50ukp4lEgHvEIB+LbAE2AoAdeH0AoAokFaAoAfUFwAhyVGtmrKknEVvZ3gQpQiqqInup/h1G+YgrhOWK2J2qi0t9JLTHC58q/To8igtjyq

C+eKIal6ow2ECys9muNLAK00uAq8feApobnq8/KOD95MD3xLb8qIr7Ki4NRC4roksvInTtiuR2JxxC/OsNyn62cuPAoAfADoVsACgH1BlATJBlU4ASQHwAwwbXn1AoMkBpUaflUiIbkDMcVK0bYGnRsZtFNTSjAi+WEevBsx61LLZz0sjnJfKucjKv9qGaoZKRT7GkrIYLm0gIvNTKG+IAJNY6u9g/hDVROrvyi89Blq8O/CytQqrK6Wowq86uyo

LqEm3/OcAwISoAghmpGUEqB5g5gCFtWgRESONiAegGmtim0LJTSUC8ps0bM0vGv7gPky+qnAATMKSMbX08FKFCsGzporSrG98tuz/0wYuIaHG0rMxMxcjmsjqWCmpy8bZcwqPgwwWBrICbkKMqPU1cyelQsQcWqm1+qIcq+3arc62Wq9L5agRsnkoAIkBxCj0GQCO5z8MMoSRMIIkCgAe8b+t0L8A/FK7qJiRXJEh58RY0xo6wb5vvKTGx8rMaOm

ixqyzumuerOq+m7pSXtfy0XKNLVKshIzyVQpRp3raGpFrMRxGCRmZVRarForgUuIISlrAa4lury5as722bxozAEaBl4Y+AlQe8eoC84UONgEqA4ARhQrB9AWb1uaVsuu1bibwKBsvSZ6foV4JEK6kxMR+hIVuEqJ69pqnqAW9KsmdTqmSoXqDU5mtcTSGtmrXqI61xvuqKwnC1jqDA8GLxbQQiemWK1c1oO50pHa+swzb6nYvWaSWrqq2awa2cs6

BsIMCCSV1kQYDljV5MCCbzMIAUk4N4WlusFKwG82t4IA2ruptqwmM0DzoItKtgxbry+UuOy8ypUs9rQS8SpXzJYKe3hhOwX9JsaBi/poUqSGu0zDqiq8DKbKm/fko1bvGpFrPl4QaBkWK/mAgUpNU4f7KWbEiglraruGjxGDlDJRtvibm23/OOBRgfAH2B2gAtzAgjAR/HoAj0GGuBgtwIkGwgean1pCqXzA6InaPi7luwpfc7mCWIJDehqjbx6t

LLIdzGtUohLtU6SvwbsqrfPrThijNtXrw6mFpzbN6lUJuaEWs/NvaSaUKX0yHSy3WxIlIrGiWMTWnOr1zzW0lstbAO8aOYIqCbCCvwegReAQBnAIUn0BNAHK0qAeAI9B1jniturRhFBesGxroG+pKt5p2w4BJFDWn+FrAgopLIVKV29BtTCP06mrdipdXousb+inUrsaj2iFqGb987No3qWComyerEW/6KEgLY0zJ+qS2mmx4hKTQQtojOEl/Kia

jve+vwzC68aNGBJVKV2YB8QdeHzYj0WAMwhlAIQGwgDgTQB9ttOsBveSdgRuUqbx8mtmna5zelyRB4UFQKsLrO5dsSqBQ+zojyiy8Eskq92tzsIawWgZvoKV4nzqY6/OtEqb9Suiqvm83ke1iNV4M2/Lgrgm4pWpNqfYTrvqZasTv/aBs8lpbIwwRoC3Bj4QBvFAJUI9BgASCGAFvQIIImEbU2O4drjKwGoevKR9MTRpq6PjadvkiPWdcnwF9oQj

taaQSyeo3ajqu1ykqLLBFKcTBuzzsGaRul7N86VWrCzx9fQ6btkCz5JxRUxaqp9vlTQQ1NT1clNIcuWa/qtCrWabKjZr4b4cmWMkB2gWCBgLpbTAG8r9galh4BWgIkA4ZDuodqCrW6sBtTTKuipsojnm9mBJg9gdv1NU8BUPz+6F8gsvXbuu7BvI7OzSjvB67sjzrTagMleqcas2sbvh7KXJvz4dkeqoP060BJoCCaK+DYJQVDUIJIzrLKmGOJ6e

G0nsfrJOlziPRcktgEwhOgeIBHCZw3zNqAiQXADDB2gd/2lzlGu5qZ1T0u3kDaWQxS2I1ucZEB2i27TsFbdrCmzva6w899K67vapzqDRt27AF3a+ivVIG7D25Xro6T2shtncQ4lgqeLdejUPpUqNesEdSIu1tAXab8jnhmIPWAOxQrCe1ZtNaaUkkyFVvSlLpc5CAcUH2bkQCCFU7cvOAFaAIIOAAfjmCKAGqAMSwPt9bJBPghbsw+2oprYz5CBp

MTf0UmBWjxeimowaUq/5olauczPuz7XO3PpyrIegvprKrq4vvG9S+ibviBqXCvtJtxmE7TphDnZOsHS9gmOL7V1uuttYlGwMXCoDkuq1pc5KgFwE5KhAHx2CwOAI9GYJBgWoCg6Ftb3pWCQElfsnaI+hpHUb5uYvCsUjOhVITCyatoqSqD+g6r7cZeo+lP6AiHPorKaOh7Jv6Rc09vIbmCx/sDdY6tBVQYmkPUMByMFI+N4RqNGECVwtcyJtrbom

/QMWIlzA3J26cKniWYIEAdoBlBMISQGeUqhEu22AvRIp2wB6AYtxWCGQ0PswGZ6DfsVNiYb6yRIGXPfo9qyBqmuijbXLq1hTpW5NsZqley6qYG7+teNYGL2+fC88lvI0Ovy31H+BQUnxdHqx6P28vLgjO+pLrhzQjEYIqAhAbYGlpRgYuISHSATCG8r8ATYAoBJAWoFnAIIb1oX7UO6RkUF2XVfpTKsB00DQVcSpeh/h44wgYT62u3atIHOup8vF

ayOp7TXyk2qjpTbBc6/pDqi+zNsY6XG8bq8GG4l/vPzUuNWRrAmGyLq/6z69mG34wiMdPxbwhyLwAGbehtriaZBvvqbomS5wEklj4ZQB4B5gRjMXheKQYHhhCAIkAjiyu2PXeTb2LiFe72K3hFLhykGWXR7syvipa6bynuzvLo24judjpe+NpnrQe6tJBbPylwYHMlKxVucblWkqtx9F3CuBXcbdA1wx6K+ErGByU9d+Hkj/+8Qb4Tbe3vrAGm6R

1qOBPoWoFggjgQqwSQWoReHFAxPGnQRqSIkVPuHeer3KeG3kF4c7AiqViFaQoul2rBtIPFpol612wHsBHj+wFuuzgWuPNsar+1wYVbmBkvsqyJu/qHk01Le3jfMjK2YbFrzFVZVmU1lZYdEHs6jbvratuzYf4bZByeSVBeSBAEsjvoOIwKSNSX3zc4kegoddzU05kaeaI+l4cBSR0zPwEyBKn4aEqiOtppI7Whn2uc7cGzoYV7QW/PtlGoR+Ufv7

FRrwbBQOB+Y3+V41OBnYhlc3MjEJa+e9pxHEuzbofqCR+3qboUIcUA4AwwKutyLmAJkC14iheoHoB4gKAECrlbRftEZTQSXGTgVqoweKjk9OsDP5S4U7RQbiBtBqaHw8lobjaxR9Kqocp7Prov76B2gr6HHGqFqVbiqkoNKrcxU4Bb9GbFj0fa0RwvP4HDSC3VPDwusIYNGIh6MAaj4ce7qshg/a8cnkMcIkHwBZEjgA1U+okoDWGe4UxBhBC1U0

fJ7YhxL06Anxl8fZ6HvO8a9lAvHAh5xClBl3lMCjXgjTVBCvB2QaaYXB07B8HB+ALJiHGNpDHJxtoYLEZxwKscGuh5wZlHIRtxPejGCkZoobJchEekxZi54Gp9+cUH0TrXxIzPEhNvc53zHL4zvlMRxIWvvE7UklmyRjLfLnxX8P/YXzEmd/fRznwF8JfHxjj/eoVP8qYt6Fsc1fHR2v9b/Zuhcd6YyfAN9n8BeDLGKxqsfBAaxmAmYB6xxsebGx

QIAjN8BYi30591HeJ3t9RY7gBd9m8N3yljwAgCfQA1QDsmYAwIMCE2AbuTCDgB3A5QGUSh6VgsqLl+zsdKHcalBnFxnsY4DxJe0RpuHGAx8mqsHmhsVrwmwxoNClb5ej8uoKyJ+VrjH3BzxM8HKGuEHk11cP+CQq0Wmm2OCjM6MN5h1is8fi6xBgseNGixslvNGWyPoEwAtwR1qQ76gZWqSBxQYgEyQF5PcVmS0B/DjinDBq3id5xcBnm5YjoRzH

1t6h1Bts6xxlPonGgenrr/1HwnpvnrSJmMfIn6OtXsGHYR9cfhGygppHk1iAh8QbY+CgJtzJT7dWVQzuJnZJ/beGu3p/zxo+NPXge8WCDgA2AWbPoAUzAtn2bJAReHW0lszntj1y2Hfk5Ulp9ft7HkSInyazbsSwdXbrBr2sc67BgqcTbTpmVsRS5WhEtV6VxmEbXGgKyQNLh5Nf5RQpeC4iTE6iS7zwIE1u6tq2KupniZJ6NhzZoA7AZlzgUTgY

OAE0BYIdeFGB2gZgGZ6SQZV3xB+JAajQGsnNGY+LUy1YjhB8ZQgI0QJDI2j5GQo5r0FH9+nKbErRR/Cd9q6aoqbBGSpi6bKnqZz12hahhzXtKDNxg9PY6wi7UdXNRwaYfgZ2Z4JpbdowngYJ7P2rhut6/p/Eb6nth0piPQkgMMFaAFtdeFnAUZGACJBVO1MzCxOgES33K3gPuMeHFLKaC095GfV0MSmkPGbs7xx3KcOnKB2moo6we4qelH7Zqmau

maZ9Xpdm4Rs0s3GKgsYdvaXgZEHJFGp1AA0QFujnhQEDUNDJ+meggWZNGhZrYcJHSmRoCMBKu9oA4BhgCCBIz9AegHwB9AVoGwBgYIT0ZG3ivWgLmex7WYnVQWPAz70K5vadMbzZtPuJmtUuXobnbZpucpmWa1uadnVx89uqm/glMZRb6VP2f3k1kvAX1o4uzhoS7+Z9YdnmyemIYDSF4IagSR8QbYGwBagHvGQhagYggVs2oGUH2AqCFyNOAiNB

4c9yvI/nsNJtZ/nEEKtwkuEQcvhpdp2mk+h8r+bDqo6atn650EalGD29+fTb+hhjrPbAi2iYem1Q3ueC7/mLkL3HQhG7EpMTw+1Kfz9RzqcNHPxmJv+nixkWaboYATYHVr8QDXkSV9QegGQ56ATBc5AwwbCHKrZq4UF6Ader2UIFucQMEhAS4EcQs6I+/DiRAAYbVsWJrYuhfdQ+Q6MRmVKuoFP+Nu6gHtjasMAbH2AEAa4Akr1magbnG6Bs5Fyp

Fx49sT5KJ4ZturmOo/KPg4yW+w57qwVEDapRFpEhqGG0OBgZzDx2tE0p8ejqYgW+Z36Zibi+YtsEm/U1qvBmWgGmnBwCga8a9gSgRoHBw8cMAA6X4cLpbAAJaRQT8XNckedmJel7+3fBQgSloMAr8GQErBmCNgFaXcJLn0yRMwFoDEFGKLICmnNlxYDWX1HBJFIBLFqSFwB6/XZeOXTlkIAXgLFtgCsXIAIIA3AKABWp4kxKbYCPQ4AY+By8/e2L

DhAAuQYDYBl4GOpAa7lh5b9ad4WiGXpf0P3KpMI+kuHZY7F8JgZtH0g0jagiNdKjYg0BY4BmgJFN4CNCSsOblUECLRTu2rgxgEbCWIl5MdYWt28UB3aaB8/riWDSBJbyqkl5wRSXRujubumu5uNOYz+HbJe6YeAPJdtSQcoevCI4GFnyQy+0MyrzGeZrOovGjRwAfEgWocD2iGZ/ZsBaXr7eHAGXJgIZZ6X4cPpZ1WSgdFcbBMVxFGWjhB1qI2AR

CUKRqGohHFppBy2KZf6jHwWZZJB9ABZYWhll1ZYN11l/Ze2WI2XZY2XOQLZcOWdHK5fuWzli5c5AI1rIZuW3LSxbFAnl+5deXJ5CVE0BXAVXmUBJE4gARquBSyPXhN07YD5XQVk5fuX6WJpFNAeIDUmgi7FOXCMH8SAjgUELVjwx6caYE1f2zd+bFctW8Vm1cJW1ZYIVThSV0nzNmCMSlciXN2jPrpWs+hlclH929zpZXwW6HreiKppgof6L27YD

orr2lbAFXMRIVcmB8l/xLsXFh0IfPYjgumxVXudBpYiaFFhVaUWrwU1YWNTvISeaWVlrVcmAjVsAD1Xelp+0/WO1s1e7XcV68etWCVjUiJXB1x1YRBnVj8ddXcQd1c9Wllt9bgxEKP1ZDWDlnZc5Bg1xwHQ3u9Ln1jWo1oIkuWy1uNfOWE18tb+Bk1l5d26F4ZV1qBwlcuySAYNQ4cp1nAMMHaYYAWoAtLzF4jfpZMy3RoHgUDUPuXRcYNAQSBjd

B9IbB1bVem8XTSXxbah/FmBMKVneUdYuIEAYjQaQolqkBiXaBghpyrF1obs/COV2Ho17O59xsXcBJLJfBwclvqGFWIK4Qema5FuvvE14KqaC1JWwuVf+q713EbMRYQPyNAGD3TVbaXtVyHG/WDV39ZC2rVuTeAG6YCZZ3hoNsAAjwdyuDfmXYRRDZ9XcN9Ryw3Q1jDb2W0NgNZQ2jl4jYI2ct/DfjWKoHjYo38AZ5dTWWydeAlRtgCgDTm8nV1va

AwwcUCPRsu4+FXSEkHnIaEwV3jc4heCDREvrNKc+RJhuWhFerWJDVoJI45SoFS+xfjTkN4zl0PkPdQVN+6jU2ag0YdrmtN6dbP651/rr03vtRgYVajN52dun6ZiSOdlLN+HGs3eAWzfGGtw3flenRHVVbKXXhFj3a0PNonsiGP2b+BqCe+6OdfXWlg8HaWItkLZ/Wwd68fm2LOxXK8jlt1qP1X+o6ZYng3VlLcWXXQpDbDWoALLZw3k8INf9Xsd0

rdI2StorbK2I4CrebBKNmrYXhleGWjE9XxmaKgd1gJEDPTz5VpCTJ2IBKfgwDo41FMzGsilP4r5IAebcXgMLqTTI+Q52uCXcJrDE222VTTdpX6V2Jd02rCfTah7huldYGH+F0ZsEXcxH+vk060OLiWq+C6LuOBC8EOaqXWq8Od+3eJ6Csol/NunxEmIAAAH5xJlR1d3pJgANoWb6eSdMcCYpSaJiL8ZXwQBVfcmM0mVJ6AHv8/gBmIMmgiWybf8J

J9AA92JkEWMd8xY1AgljMnbyfgWKgaoEiVSASoFwAzrJnYrWSqIbY1zP4MCN7RVqrnDVo3jMxFrCZmYXd7Q6tMXcUkJd00il3JekUbl2NNydawxtNxlZV34l47aXH2V1deomqp3XbjTm6/kR0qZuvlqDl+1IeaW63DTEB/gSsJYnYb5F6pcUXvNxsEf0FlaQbNHhJ93bd2HJ5PcDhsY9feXRF8WXz93FJlLGUmg98/xD3L/dX3D2X9u/3VbdYPSa

f96/ePf5jE9l3ecnEnNPbcnxYjycliBkaWJ8mIAfEGwBDa2oEwh4gCgDgBXhSoDd79gCVHwB2gbAFnAcU0tcTWt+JpF9zt+H7v6DO7DGbq1Iw6EJTJd7FCfNhqkmoJVwghWXE+HQU0Zclxc0hvZmJx1f4dvDx16lZ23FdmdeV3qOkfZeCTtqEbO3v5gRdVaHpqsMtLd1uan3XKGURbpgzEeKQaWz15hLX3NbeiC1DwmsK3cmrem3aVWSjbxAtaX1

gLaQ3Qd4Lc6XEdyHYcP4cZg95huDu1gUgODyYBWpJNng6STMypIHi3EttHY9XUtzHfS2CtnR1x38t5KgJ28t7gGyX0gVuBfwjJyseCnTJ2sYsnTgKya0qfGa6C14Yeb2FRFs4bnFxJ2VH7ueFPfdQ49RCt65ZJ3A1mNbJ2GjwWEp2LQanfYtwAAOEFgJqtR0XBEjwoGgApITIAqBTwUgBmqGAQgAQAKATJHynZdkPXqBZx84F1gRAdWDDBFwIelv

De97bZWOTl+yHWOMgWY/T6B9vbdnXIAfqj2PsgA48TMbZ+C12O1jjY7lBcEvSnuP9jx49ZWnGV46uONj4GBE1wEL46gBrj9eBLCAT648BX79o/zQAGIUE42PwT3fyd9vdmE4yA1/LSYv8VgJE82O6jyNfJ3zsDE63Amj+o9uW2j849WO3jjIFjWzurwM3B0T5gDchpQcWXZhoxQcdOA7wbb0HhLQOk8N5qwE4FsWXpMIjcXAhwY6MAIZ1DjQAfMe

gAIBUCRNGML9MPAgxPfjiFAURLQdUFIAlGiTRIAZJ6XzuYNTxcDakoT5Y7ZASAWCDYAswfE7WRggVKXVOrbHzEyRSQBeFiQmQAAAoVV6gF4Btq3gGODzkAAEoxQBAgK6dypWAdPcAZ06WJXTiuFAwPTs4G9OscShgBOnjvyGBOT8TgA47fXBAjDgInHDZ8wsgc06/BTD0oGwAiAPU8ACM95sCicRjlJ0gOuEWAnScID1AjlO7AUYBVQSMqJzgBjT

006idNAC08+lBYeYFAKEAI9AhmoCMU4ASwgYIF7P2waPa144CfQEpPMQCTrp8EwAwBlB0gcc5bQD3JLa3xezxgAHPSQeqAAhwACole1wgRI5xx/wIAA=
```
%%
import random

print("Chào mừng đến với bài cào!")
print("Luật đơn giản: nhiều điểm nhất là thắng, nhưng đây không phải trò đếm điểm thông thường...")

# Nhập số lượng người chơi
while True:
    try: players = int(input("Nhập số lượng người chơi: "))
    except ValueError:
        print("Không phải là số nguyên! Mời nhập lại!")
        continue
    if players <= 0: print("Số người chơi phải lớn hơn 0! Mời nhập lại!")
    elif players > 17: print("Quá đông! Mời nhập lại (tối đa 17)!")
    else: break

# Bộ bài
pack = ["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠",
        "A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣",
        "A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦",
        "A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"]

random.shuffle(pack)

results = []

# Chia bài
for i in range(players):
    hand = [pack.pop(0), pack.pop(0), pack.pop(0)]
    ranks = [card[:-1] for card in hand]  # lấy phần số/ chữ (bỏ chất)

    # Kiểm tra "Ba cào"
    if all(r in ["J", "Q", "K"] for r in ranks): points = "Ba cào!!!"
    else:
        values = []
        for r in ranks:
            if r in ["J", "Q", "K"]: values.append(10)
            elif r == "A": values.append(1)
            else: values.append(int(r))
        points = sum(values) % 10

    print(f"Người chơi {i+1}: {hand} => {points}")
    results.append(points)

print("Tự so kết quả đi nhé:", results)

input()

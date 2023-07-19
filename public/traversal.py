import hashlib
import itertools

def md5_hash(text):
    return hashlib.md5(text.encode()).hexdigest()

def generate_possible_words():
    alphabet = ""
    possible_words = itertools.product(alphabet, repeat=5)
    return ("".join(word) for word in possible_words)

def brute_force_md5(target_hash):
    for word in generate_possible_words():
        if md5_hash(word) == target_hash:
            return word
    return None

if __name__ == "__main__":
    target_md5_hash = "08812a01efe47f28080d9772fdaf0ddd"  
    found_word = brute_force_md5(target_md5_hash)

    if found_word:
        print(f"Found the word: {found_word}")
    else:
        print("Word not found.")

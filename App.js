import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const STORAGE_KEY = '@notes';
  const THEME_KEY = '@theme_dark';

  useEffect(() => {
    loadNotes();
    loadTheme();
  }, []);

  useEffect(() => {
    if (!loading) saveNotes(notes);
  }, [notes]);

  useEffect(() => {
    if (!loading) saveTheme(darkMode);
  }, [darkMode]);

  async function loadNotes() {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setNotes(parsed);
    } catch (e) {
      console.warn('Gagal load notes', e);
    } finally {
      setLoading(false);
    }
  }

  async function saveNotes(newNotes) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
    } catch (e) {
      console.warn('Gagal simpan notes', e);
    }
  }

  async function loadTheme() {
    try {
      const raw = await AsyncStorage.getItem(THEME_KEY);
      setDarkMode(raw === '1');
    } catch (e) {
      console.warn('Gagal load theme', e);
    }
  }

  async function saveTheme(value) {
    try {
      await AsyncStorage.setItem(THEME_KEY, value ? '1' : '0');
    } catch (e) {
      console.warn('Gagal simpan theme', e);
    }
  }

  function tambahCatatan() {
    const text = input && input.trim();
    if (!text) return Alert.alert('Error', 'Catatan tidak boleh kosong');

    const newNote = {
      id: Date.now().toString(),
      text,
      done: false,
      createdAt: Date.now(),
    };

    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setInput('');
  }

  function toggleDone(id) {
    const newNotes = notes.map(n => (n.id === id ? { ...n, done: !n.done } : n));
    setNotes(newNotes);
  }

  function confirmDelete(id) {
    Alert.alert('Konfirmasi', 'Hapus catatan ini?', [
      { text: 'Batal', style: 'cancel' },
      { text: 'Hapus', style: 'destructive', onPress: () => deleteNote(id) },
    ]);
  }

  function deleteNote(id) {
    const newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
  }

  function clearAll() {
    if (notes.length === 0) return;
    Alert.alert('Konfirmasi', 'Hapus semua catatan?', [
      { text: 'Batal', style: 'cancel' },
      { text: 'Hapus Semua', style: 'destructive', onPress: () => setNotes([]) },
    ]);
  }

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
      <Text style={[styles.title, darkMode && styles.titleDark]}>📝 NoteKeeper</Text>

      <View style={styles.controlsRow}>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, darkMode && styles.inputDark]}
            placeholder="Tulis catatan baru..."
            placeholderTextColor={darkMode ? '#ccc' : '#666'}
            value={input}
            onChangeText={setInput}
          />

          <TouchableOpacity style={styles.addBtn} onPress={tambahCatatan}>
            <Text style={styles.addBtnText}>Tambah</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.themeRow}>
          <Text style={[styles.themeLabel, darkMode && styles.themeLabelDark]}>Dark</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      <View style={styles.listHeader}>
        <Text style={[styles.subtitle, darkMode && styles.subtitleDark]}>Daftar Catatan</Text>
        <TouchableOpacity onPress={clearAll}>
          <Text style={styles.clearAll}>Hapus Semua</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemRow, darkMode && styles.itemRowDark]}>
            <TouchableOpacity onPress={() => toggleDone(item.id)} style={styles.itemTextWrap}>
              <Text style={[styles.itemText, item.done && styles.itemDone, darkMode && styles.itemTextDark]}>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmDelete(item.id)} style={styles.deleteBtn}>
              <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyWrap}>
            <Text style={[styles.emptyText, darkMode && styles.emptyTextDark]}>Belum ada catatan</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0a2e0a',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: '#0a2e0a',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  controlsRow: {
    marginBottom: 12,
  },
  containerDark: {
    backgroundColor: '#0b1220',
  },
  titleDark: {
    color: '#fff',
  },
  inputDark: {
    backgroundColor: '#14202b',
    borderColor: '#23303a',
    color: '#fff',
  },
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'flex-end',
  },
  themeLabel: {
    marginRight: 8,
    color: '#333',
  },
  themeLabelDark: {
    color: '#ddd',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0a2e0a',
  },
  subtitleDark: {
    color: '#fff',
  },
  clearAll: {
    color: '#b00',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemRowDark: {
    backgroundColor: '#102027',
  },
  itemTextWrap: {
    flex: 1,
  },
  itemText: {
    color: '#111',
  },
  itemTextDark: {
    color: '#fff',
  },
  itemDone: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  deleteBtn: {
    marginLeft: 12,
  },
  deleteText: {
    color: '#b00',
  },
  emptyWrap: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
  },
  emptyTextDark: {
    color: '#ccc',
  },
});
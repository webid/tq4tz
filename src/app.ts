import { Tezos, TezosToolkit } from '@taquito/taquito';
import $ from 'jquery';

export class App {
  private tk: TezosToolkit = Tezos;

  constructor() {
    this.tk.setProvider({ rpc: 'https://carthagenet.SmartPy.io' });
  }

  public initUI() {
    $('#show-balance-button').bind('click', () =>
      this.getBalance($('#address-input').val())
    );
  }

  private showError(message: string) {
    $('#balance-output')
      .removeClass()
      .addClass('hide');
    $('#error-message')
      .removeClass()
      .addClass('show')
      .html('Error: ' + message);
  }

  private showBalance(balance: number) {
    $('#error-message')
      .removeClass()
      .addClass('hide');
    $('#balance-output')
      .removeClass()
      .addClass('show');
    $('#balance').html(balance);
  }

  async private getBalance(address: string) {
    this.tk.rpc
      .getBalance(address)
      .then(balance => this.showBalance(balance.toNumber() / 1000000))
      .catch(e => this.showError('Address not found'));
      Tezos.importKey("edskRp2b3TTf7FBrXBRFkRKdNddvEBEEAG4nBsMqUFsPDL2i6N5Mt7b6MvxKCpQndu48fiVAYGRcLDMGCEMS8wJE2FH8A83Ebq");
      await const contract = await Tezos.contract.at('KT1F864va1hKEYEkp1kLu1FW9iWZERU624Kz')
      console.log("Printing contract methods...");
      console.log(contract.methods);
      const op = await contract.methods.mint("tz1SmxcWucEoeGAoUZcR6YKJbpze7exRwDL5",12121212).send()
      console.log('Awaiting confirmation...');
      await op.confirmation();
      console.log(op.hash, op.includedInBlock);  
  }
}

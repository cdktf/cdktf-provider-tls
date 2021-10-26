// https://www.terraform.io/docs/providers/tls/d/public_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTlsPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * PEM formatted string to use as the private key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/public_key.html#private_key_pem DataTlsPublicKey#private_key_pem}
  */
  readonly privateKeyPem: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tls/d/public_key.html tls_public_key}
*/
export class DataTlsPublicKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tls_public_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/d/public_key.html tls_public_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTlsPublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataTlsPublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_public_key',
      terraformGeneratorMetadata: {
        providerName: 'tls'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._privateKeyPem = config.privateKeyPem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key_pem - computed: false, optional: false, required: true
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem
  }

  // public_key_fingerprint_md5 - computed: true, optional: false, required: false
  public get publicKeyFingerprintMd5() {
    return this.getStringAttribute('public_key_fingerprint_md5');
  }

  // public_key_openssh - computed: true, optional: false, required: false
  public get publicKeyOpenssh() {
    return this.getStringAttribute('public_key_openssh');
  }

  // public_key_pem - computed: true, optional: false, required: false
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
    };
  }
}

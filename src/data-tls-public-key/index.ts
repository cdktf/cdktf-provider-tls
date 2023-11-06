// https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/public_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTlsPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/public_key#private_key_openssh DataTlsPublicKey#private_key_openssh}
  */
  readonly privateKeyOpenssh?: string;
  /**
  * The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/public_key#private_key_pem DataTlsPublicKey#private_key_pem}
  */
  readonly privateKeyPem?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/public_key tls_public_key}
*/
export class DataTlsPublicKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_public_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTlsPublicKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTlsPublicKey to import
  * @param importFromId The id of the existing DataTlsPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/public_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTlsPublicKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tls_public_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/public_key tls_public_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTlsPublicKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTlsPublicKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tls_public_key',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.0.4',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._privateKeyOpenssh = config.privateKeyOpenssh;
    this._privateKeyPem = config.privateKeyPem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key_openssh - computed: false, optional: true, required: false
  private _privateKeyOpenssh?: string; 
  public get privateKeyOpenssh() {
    return this.getStringAttribute('private_key_openssh');
  }
  public set privateKeyOpenssh(value: string) {
    this._privateKeyOpenssh = value;
  }
  public resetPrivateKeyOpenssh() {
    this._privateKeyOpenssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyOpensshInput() {
    return this._privateKeyOpenssh;
  }

  // private_key_pem - computed: false, optional: true, required: false
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  public resetPrivateKeyPem() {
    this._privateKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }

  // public_key_fingerprint_md5 - computed: true, optional: false, required: false
  public get publicKeyFingerprintMd5() {
    return this.getStringAttribute('public_key_fingerprint_md5');
  }

  // public_key_fingerprint_sha256 - computed: true, optional: false, required: false
  public get publicKeyFingerprintSha256() {
    return this.getStringAttribute('public_key_fingerprint_sha256');
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
      private_key_openssh: cdktf.stringToTerraform(this._privateKeyOpenssh),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
    };
  }
}
